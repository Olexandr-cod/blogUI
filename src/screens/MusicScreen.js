import React from "react"
import {View, Text, StyleSheet} from "react-native"
import { MusicList } from "../components/MusicList"


const MusicScreen = () => {
   return(
    
        <View style={styles.container} >
            <Text style={styles.text}>Musics</Text>
            
                <MusicList />
            
        </View>
    
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 50
    },
    text: {
        padding: 20
    },
    
})

export default MusicScreen;