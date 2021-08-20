import { StatusBar } from 'expo-status-bar';
import React,{ useEffect,useState  } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Login, Signup } from './src/Screens'
import { Main } from './Main'
import { firebase } from './src/firebase/config';
import { FaAddressCard } from 'react-icons/fa'

const Stack = createStackNavigator()

export default function App() {

  const [user, setUser] = useState(null)
  const [loggedin, setLoggedin] = useState(false)

  //Testing facility
  //code: "auth/quota-exceeded"
  const[email, setEmail] = useState("yomzi123@gmail.com")
  const [password, setPassword] = useState("Asstastic")
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    
    user?(
      
        
    ):(
      firebase.auth().signInWithEmailAndPassword(email, password)
          .then(() => {
            firebase.firestore().collection("users").doc(email).get()
              .then(doc => setUser(doc.data()))
              .catch(err=>{
                if(err.code === "auth/quota-exceeded"){
                  if(email === "yomzi123@gmail.com"){
                    setEmail("tsika1996190514@gmail.com")
                    setPassword("Kingslayer")
                  }else{
                    setEmail("yomzi123@gmail.com")
                    setPassword("Asstastic")
                  }
                }
                console.log(err)
              })
          })
          .catch(err=>{
            console.log(err)
          })
    )
  })

  // useEffect(()=>{
  //   firebase.auth().signInWithEmailAndPassword(email, password)
  //         .then(() => {
  //           firebase.firestore().collection("users").doc(email).get()
  //             .then(doc => Enter(doc.data()))
  //             .catch(err=>{
  //               if(err.code === "auth/quota-exceeded"){
  //                 if(email === "yomzi123@gmail.com"){
  //                   setEmail("tsika1996190514@gmail.com")
  //                   setPassword("Kingslayer")
  //                 }else{
  //                   setEmail("yomzi123@gmail.com")
  //                   setPassword("Asstastic")
  //                 }
  //               }
  //               console.log(err)
  //             })
  //         })
  //         .catch(err=>{
  //           console.log(err)
  //         })
  // })


  const Enter = (info) => {
    info ? setUser(info) : null
  }
  return (
    <>
      <Main user={user} />
     {/* <FaAddressCard/>*/}
      {/*{user ? (
          loading?(<Main user={user} />
            
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login">
              {props => <Login {...props} Enter={Enter} />}
            </Stack.Screen>
            <Stack.Screen name="Signup">
              {props => <Signup {...props} Enter={Enter} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      )}*/}
    </>
  );
}
