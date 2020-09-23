import React from "react"
import {View, Text, StyleSheet} from "react-native"
import FetchPost from "../components/FetchPost"



const FetchPostScreen = (props) => {
   return(
    
        <View style={styles.container} >
            <Text style={styles.text}>Fetch Post</Text>
            <FetchPost post={[]}/>
        </View>
    
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        color: "gray",
        padding: 20
    },
    
})

export default FetchPostScreen;