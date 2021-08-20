import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles'

export const TrackTab = () => {
    return(
        <TouchableOpacity style={styles.tracktab}>
        <View>
            <Text>Track Name</Text>
            <Text>Artist</Text>
            <Text>Album</Text>
        </View>
    </TouchableOpacity>
    )
}