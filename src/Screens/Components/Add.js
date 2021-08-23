import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from '../styles'

export const Add = ({navigation, styling}) =>{
    return(
        <TouchableOpacity style={styling} onPress={()=>navigation.navigate("AddTrack")}>
            <Text style={styles.addSize}>+</Text>
        </TouchableOpacity>
    )
}