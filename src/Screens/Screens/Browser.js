import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import { TrackCards } from '../Components/TrackCards'
import { Hamburger } from '../Components/Hamburger'
import {Add} from '../Components/Add'
import { styles } from '../styles'

export function Browser({tracks, Delete, navigation}){

    const [songs, setTracks] = useState(tracks)

    const Search = find =>{
        if(find === "")setTracks(tracks)
        else{
            setTracks(songs.filter(item =>{
                for(var i=0; i < item.title.length; i++)
                    if(item.title.indexOf(find) !== -1) return item
                for(var i=0; i < item.artist.length; i++)
                    if(item.artist.indexOf(find) !== -1) return item
                for(var i=0; i < item.album.length; i++)
                    if(item.album.indexOf(find) !== -1) return item
            }))
        }
    }

    return(
        <View style={styles.base}>
            <View style={styles.header}>
                <Hamburger/>
            </View>
            <TextInput placeholder="Search" style={styles.input} onChangeText={search=>Search(search)}/>
            <Add navigation={navigation} styling={styles.add2}/>
            <View style={styles.row}>
            {
                songs.map((item, index) => (
                    
                        <TrackCards track={item}  Delete={Delete}/>
                    
                ))
            }
            </View>
        </View>
    )
}