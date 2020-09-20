import React from "react"
import {View, StyleSheet} from "react-native"

import FilmList from "../components/FilmList"




const FilmScreen = () => {
    return(
        <View style={styles.container}>
            <View>  
                <FilmList />
            </View>
        </View>

)}
   
    
    
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }
})

export default FilmScreen;