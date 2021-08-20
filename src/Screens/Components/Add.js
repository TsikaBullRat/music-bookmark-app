import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from '../styles'

export const Add = ({navigation}) =>{
    return(
        <TouchableOpacity style={styles.add} onPress={()=>navigation.navigate("AddTrack")}>
            <Text style={styles.addSize}>+</Text>
        </TouchableOpacity>
    )
}