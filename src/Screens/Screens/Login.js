import React,{ useState, useRef } from 'react'
import { TextInput, View, Text, TouchableOpacity } from 'react-native'
import {styles} from '../styles'
import {firebase} from '../../firebase/config'

export function Login({navigation, Enter}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Login = () =>{
        firebase.auth().signInWithEmailAndPassword(email,password).then(
            firebase.firestore().collection("users").doc(email).get()
                .then(doc=>Enter(doc.data()))
                .catch(err=>console.log(err))
        ).catch(err=>{
            console.log(err)
        })
    }

    return (
        <View style={styles.container_landing}>
            <Text style={styles.Header1}>Tsika's Music Bookmark</Text>
            <TextInput placeholder="Email" style={styles.input} onChangeText={text=>setEmail(text)}/>
            <TextInput secureTextEntry placeholder="Password" style={styles.input} onChangeText={text=>setPassword(text)}/>
            <TouchableOpacity onPress={ Login } style={styles.button}>
                <Text style={styles.button_text}>Log In</Text>
            </TouchableOpacity>
            <Text>Don't have an acount <Text onPress={()=>navigation.navigate("Signup")} style={styles.textSignUp}>Sign Up</Text></Text>
        </View>
    )
}