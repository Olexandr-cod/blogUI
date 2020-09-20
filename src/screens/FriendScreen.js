import React from "react"
import {View, Text, StyleSheet} from "react-native"




const FriendScreen = () => {
    return(
        
        <View style={styles.container} >
            <View>
                <Text>Friend</Text>
                
            </View>
           
     
        </View>

)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default FriendScreen;