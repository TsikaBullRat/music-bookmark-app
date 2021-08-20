import React, { useState, useEffect } from 'react'
import { AddTrack, Home } from "./src/Screens"
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { firebase } from './src/firebase/config'

const Stack = createStackNavigator()




export const Main = ({ user }) => {
    
    //  Tester data for my musicbookmark
    const [tester, setTester] = useState()
    const [tracks, setTracks] = useState(/*firebase.firestore().collection("users").doc(user.email).get().then(doc=>doc.data)*/)
    useEffect(()=>{
        setTimeout(()=>console.log(user), )
    })

    const Update = (data) =>{

        firebase.firestore().collection("users").doc(user.email).set({
            tracklist: [...tracks, data]
        },{merge: true})

        setTracks(firebase.firestore().collection("users").doc(user.email).get().then(doc=>doc.data))
        console.log(user)
        console.log(tracks)
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home">
                    {props => <Home {...props} user={user}/>}
                </Stack.Screen>
                <Stack.Screen name="AddTrack">
                    {props=> <AddTrack {...props} Update={Update}/>}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}