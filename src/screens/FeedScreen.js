import React from "react"
import {View, Text, StyleSheet, Button} from "react-native"




const FeedScreen = ({navigation}) => {
    return(
        
        <View style={styles.container} >
            <View>
                <Text>This is Feed</Text>
                <Button title="Go to freind? this is Search" onPress={() => navigation.navigate("Search")}   /> 
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

export default FeedScreen;