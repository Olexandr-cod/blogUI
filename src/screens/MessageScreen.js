import React from "react"
import {View, Text, StyleSheet} from "react-native"


const MessageScreen = ({navigation}) => {
    return(
           <View style = {styles.container}>
              <Text>Message</Text>
              
              
              
           </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default MessageScreen;