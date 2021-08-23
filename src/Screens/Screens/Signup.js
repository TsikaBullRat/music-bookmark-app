import React from 'react'
import { useState } from 'react'
import { TextInput, View, Text, TouchableOpacity } from 'react-native'
import {styles} from '../styles'
import {firebase} from '../../firebase/config'
import { v1 as uuid} from 'uuid'

export function Signup({Enter}){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Submit = () =>{
        firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
            firebase.firestore().collection("users").doc(email).set({
                name:name,
                email:email,
                tracklist:null
            })

            Enter(firebase.firestore().collection("users").doc(email).get()
                .then(doc=>doc.data())
                .catch(err=>{
                    console.log(err)
                }))
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <View style={styles.container_landing}>
            <Text style={styles.Header1}>Sign Up Here</Text>
            <TextInput placeholder="User name" style={styles.input} onChangeText={text=>setName(text)}/>
            <TextInput placeholder="Email" style={styles.input} onChangeText={text=>setEmail(text)}/>
            <TextInput secureTextEntry placeholder="Password" style={styles.input} onChangeText={text=>setPassword(text)}/>

            <TouchableOpacity onPress={Submit} style={styles.button}>
                <Text style={styles.button_text}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}