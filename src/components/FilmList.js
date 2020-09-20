import React from "react"
import {View, Text, StyleSheet, SafeAreaView, Image, ScrollView, TouchableOpacity} from "react-native"


export const FilmList = () => {
    return(
        <View style={styles.content}>
           <ScrollView>
           <SafeAreaView style={styles.blockArea}>
                <Text>NEW NEW NEW</Text>
                <Text style={styles.title}>Film</Text>
                <Text>NEW NEW NEW</Text>
            </SafeAreaView>
            <View style={styles.conteinerImg}>
                <TouchableOpacity>
                    <Image style={styles.img} source={{uri: 'https://medias.unifrance.org/medias/27/51/209691/format_page/les-films-du-bal.jpg',}} />
                    <View>
                        <Text style={styles.textImg}>ATLANTIN</Text>
                    </View>
                </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={styles.img} source={{uri: 'https://upload.wikimedia.org/wikipedia/ru/e/e7/Us_%28film%2C_2019%29.jpg',}} />
                    <View>
                        <Text style={styles.textImg}>US</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlGmGMJvM2krUMcfpMn8nY9DfGUv0VNv5Ugw&usqp=CAU',}} />
                    <View>
                        <Text style={styles.textImg}>Bright</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnEzK2BmxiwlkIB-vANlJsnDuQFeBzETI20A&usqp=CAU',}} />
                    <View>
                        <Text style={styles.textImg}>Blooosh</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={{uri: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Forensic_film_poster.jpg',}} />
                    <View>
                        <Text style={styles.textImg}>Forensig</Text>
                    </View>
                </TouchableOpacity> 
                <TouchableOpacity>
                    <Image style={styles.img} source={{uri: 'https://upload.wikimedia.org/wikipedia/ru/e/e7/Us_%28film%2C_2019%29.jpg',}} />
                    <View>
                        <Text style={styles.textImg}>US</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={{uri: 'https://medias.unifrance.org/medias/27/51/209691/format_page/les-films-du-bal.jpg',}} />
                    <View>
                        <Text style={styles.textImg}>ATLANTIN</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={{uri: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Forensic_film_poster.jpg',}} />
                    <View>
                        <Text style={styles.textImg}>Forensig</Text>
                    </View>
                </TouchableOpacity> 
                 
            </View>
               
           </ScrollView> 
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 13
    },
    blockArea: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 12,
        marginTop: 10,
        width: 390,
        height: 80,
        borderColor: "pink",
        backgroundColor: "white"
    },
    title: {
        fontFamily: "AvenirNext-DemiBold",
        fontSize: 20,  
    },
    conteinerImg: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop: 15,
        shadowColor: "#000",
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 7},
        shadowOpacity: 0.7,
        
    },
    img: {
        marginLeft: 30,
        marginTop: 15,
        width: 150,
        height: 210,
        borderRadius: 7
    },
    textImg: {
        fontSize: 20,
        marginTop: 15,
        textAlign: "center",
        
    }
})
 
export default FilmList