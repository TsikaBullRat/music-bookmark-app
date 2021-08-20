import React,{ useState } from 'react'
import { TextInput, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles'

export const AddTrack = ({Update, navigation}) =>{

    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [album, setAlbum] = useState("")
    const [year, setYear] = useState(0)

    const AddSong = () =>{
        const track = {
            title: title,
            artist: artist,
            album: album,
            year: year
        }
        Update(track)
        navigation.navigate("Home")
    }

    return(
        <View>
            <TextInput style={styles.input} placeholder="Song Title" onChangeText={ent=>setTitle(ent)}/>
            <TextInput style={styles.input} placeholder="Artist" onChangeText={ent=>setArtist(ent)}/>
            <TextInput style={styles.input} placeholder="Album" onChangeText={ent=>setAlbum(ent)}/>
            <TextInput style={styles.input} placeholder="Year" onChangeText={ent=>setYear(ent)}/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.button_text} onPress={AddSong}>Add Song</Text>
            </TouchableOpacity>
        </View>
    )
}