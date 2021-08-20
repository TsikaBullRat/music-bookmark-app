import React from 'react'
import { View } from 'react-native'
import { styles } from '../styles'
import { TrackTab } from './TrackTab'

export const LastPlayed = () =>{
    return(
        <View style={styles.lastpalyedlist}>
            <TrackTab/>
        </View>
    )
}