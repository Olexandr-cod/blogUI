import React from "react"
import {View, Text, StyleSheet} from "react-native"


const DialogsScreen = () => {
   return(
    
        <View style={styles.container} >
            <Text>DialogsScreen</Text>
        </View>
    
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    
})

export default DialogsScreen;