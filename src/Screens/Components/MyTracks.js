import React,{useEffect} from 'react'
import { TouchableOpacity, View  } from 'react-native'
import { styles } from '../styles'
import { TrackCards } from './TrackCards'

export const MyTracks = ({tracks, navigation, Delete}) =>{

    return(
        <TouchableOpacity 
            style={styles.trackholster}
            onPress={()=>navigation.navigate("Browser")}>
            {tracks.map(item=>{for(var x = 0; x < 4; x++){return <TrackCards track={item}  Delete={Delete}/>}})}
        </TouchableOpacity>
    )
}