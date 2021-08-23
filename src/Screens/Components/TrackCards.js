import React from 'react'
import { BiDisc } from 'react-icons/bi'
import { View, Text, TouchableOpacity, Touchable } from 'react-native'
import { styles } from '../styles'

export function TrackCards({track, Delete}){
    return(
        <TouchableOpacity style={styles.trackcard}>
            <View style={styles.background}><BiDisc color="#64C9CF" size={100}/></View>
            <View>
                <Text style={styles.textTrack}>Song: {track.title}</Text>
                <Text style={styles.textTrack}>Artist: {track.artist}</Text>
                <Text style={styles.textTrack}>Album: {track.album}</Text>
                <Text style={styles.textTrack}>Year: {track.year}</Text>
            </View>
            <Text style={styles.delete} onPress={()=>Delete(track.title)}>Delete</Text>
        </TouchableOpacity>
    )
}