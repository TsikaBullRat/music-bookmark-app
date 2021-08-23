import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles'
import { BiDisc } from 'react-icons/bi'

export const TrackTab = ({track}) => {
    return(
        <TouchableOpacity style={styles.tracktab}>
        <View style={styles.tracktabicon}><BiDisc color="#000" size={50}/></View>
        <View style={styles.tracktabtext}>
            <Text>{track.title}</Text>
            <Text>{track.artist}</Text>
            <Text>{track.album}</Text>
        </View>
    </TouchableOpacity>
    )
}