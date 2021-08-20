import React from 'react'
import { styles } from "../styles"
import { View, TouchableOpacity } from "react-native";

export const Hamburger = () => {
    return (
        <TouchableOpacity style={styles.hamburger}>
            <View style={styles.hamburger1}></View>
            <View style={styles.hamburger2}></View>
            <View style={styles.hamburger3}></View>
        </TouchableOpacity>
    )
}