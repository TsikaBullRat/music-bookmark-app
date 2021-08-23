import React from 'react'
import { View } from 'react-native'
import { styles } from '../styles'
import { TrackTab } from './TrackTab'

export const LastPlayed = ({tracks}) =>{
    return(
        <View style={styles.lastpalyedlist}>
            {/*tracks.map(item=><TrackTab track={item}/>)*/}
        </View>
    )
}