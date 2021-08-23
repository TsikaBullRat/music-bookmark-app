import React, { useState, useEffect } from 'react'
import { AddTrack, Home, Browser } from "./src/Screens"
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { firebase } from './src/firebase/config'

const Stack = createStackNavigator()




export const Main = ({ user }) => {

    const [tracks, setTracks] = useState(user.tracklist)
    
    //  Tester data for my musicbookmark
    const Update = (data) =>{
        firebase.firestore().collection("users").doc(user.email).update({
            tracklist: [...tracks, data]
        })
        firebase.firestore().collection("users").doc(user.email).get().then(doc=>setTracks(doc.data().tracklist))
    }
    const Delete = track =>{
        firebase.firestore().collection("users").doc(user.email).update({
            tracklist: tracks.filter(item=>{if(item.title !== track)return item})
        })
        firebase.firestore().collection("users").doc(user.email).get().then(doc=>setTracks(doc.data().tracklist))
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home">
                    {props => <Home {...props} tracklist={tracks} Delete={Delete}/>}
                </Stack.Screen>
                <Stack.Screen name="AddTrack">
                    {props=> <AddTrack {...props} Update={Update}/>}
                </Stack.Screen>
                <Stack.Screen name="Browser">
                    {props=> <Browser {...props} tracks={user.tracklist} Delete={Delete}/>}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}