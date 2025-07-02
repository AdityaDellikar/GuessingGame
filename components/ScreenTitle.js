import React from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native';


const ScreenTitle = ({children}) => {
  return (
    <View style={styles.titleContainer}>
        <Text style={styles.titleTextColor}>{children}</Text>
    </View>
  )
}

export default ScreenTitle;

const styles= StyleSheet.create({
    titleContainer:{
        marginTop: 100,
        justifyContent:"center",
        alignItems:"center",
        //width: "100%",
        backgroundColor: "#0d2f2b",
        marginHorizontal: 24,
        padding:16,
        borderRadius:10,
        fontWeight: "bold",
    },

    titleTextColor: {
        color:"#33ff66",
        fontWeight: "bold",

    },
})
