import React from "react"
import {View, Text, StyleSheet} from "react-native"
import PostComponent from "../components/PostComponents/PostComponent"



 
const PostFormScreen = ({props}) => {
   return(
    
        <View style={styles.container} >
            <Text style={styles.text}>Post Forma</Text>   
            <PostComponent post={[]} />         
        </View>
    
   )
}

const styles = StyleSheet.create({
    text: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        padding: 20,
        color: "gray",
    },
    
})

export default PostFormScreen;