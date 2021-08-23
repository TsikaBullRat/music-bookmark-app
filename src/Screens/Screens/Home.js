import React from 'react'
import { View, Text, TouchableOpacity } from "react-native";
import { Hamburger } from '../Components/Hamburger';
import { LastPlayed } from '../Components/LastPlayed';
import { MyTracks } from '../Components/MyTracks'
import {Add} from '../Components/Add'
import {styles} from '../styles'

export function Home({tracklist, navigation, Delete}){

    
    
    return(
        <View style={styles.base}>
            <View style={styles.header}>
                <Hamburger/>
            </View>
            
            <View style={styles.body}>
                <MyTracks tracks={tracklist} navigation={navigation}   Delete={Delete}/>{/*Track={user.tracklist}*/}
                <Add navigation={navigation} styling={styles.add}/>
                <LastPlayed tracks={tracklist}/>
            </View>
        </View>
    )
}