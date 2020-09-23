import React from "react"
import {Text, View, TextInput, StyleSheet} from "react-native"
import Posts from "../Posts"


export default class PostComponent extends React.Component{
    constructor(props){
        super(props)

        this.state = {}
    }

    submitHandler = event => {
        event.preventDefault();
    }

    render(){
        return(
           <View>
            <View onSubmit={this.submitHandler} > 
                 <Text >Заголовок поста</Text>
                 <TextInput stel />
                <Posts post={this.post} />
            </View>
           </View>  
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        padding: 20,
    }
})


