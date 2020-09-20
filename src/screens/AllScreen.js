import React from "react"
import {View, Text, StyleSheet} from "react-native"



const AllScreen = ({navigation}) => {
   return(
    
        <View style={styles.container} >
            <Text>AllScreen</Text>
            
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

export default AllScreen;