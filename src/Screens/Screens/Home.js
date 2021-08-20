import React from 'react'
import { View, Text, TouchableOpacity } from "react-native";
import { Hamburger } from '../Components/Hamburger';
import { LastPlayed } from '../Components/LastPlayed';
import { MyTracks } from '../Components/MyTracks'
import {Add} from '../Components/Add'
import {styles} from '../styles'

export function Home({user, navigation}){

    
    return(
        <View style={styles.base}>
            <View style={styles.header}>
                <Hamburger/>
            </View>
            
            <View style={styles.body}>
                <MyTracks/>
                <Add navigation={navigation}/>
                <LastPlayed/>
            </View>
        </View>
    )
}