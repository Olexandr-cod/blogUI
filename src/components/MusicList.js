import React from "react"
import {View, Text, SafeAreaView, StyleSheet, Button} from "react-native"


export const MusicList = () => {
    return( 
        <View>
            <SafeAreaView style={styles.container}>
                 <Text style={styles.title}>Monatic - Nebo</Text>
            </SafeAreaView>
            <View  style={styles.btmClick}>
            <Button title="Back"  />
            <Button title="1"  />
            <Button title="2"  />
            <Button title="3" />
            <Button title="4"/>
            <Button title="Next" />
            </View>
            
         
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 50,
        backgroundColor: "#e7e7b0",
    },
    title: {
        justifyContent: "center",
        textAlign: "center",
        color: "blue",
        paddingTop: 14,
        fontSize: 18,
    },
    btmClick: {
        paddingTop: 25,
        paddingLeft: 57,
        flexDirection: "row",
        color: "#0e2f0c",  
    },
   
})