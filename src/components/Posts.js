import React from "react"
import { View, Text } from "react-native"

const Posts = ({post}) => {
    return(
        <View>
            <Text>Title: {post}</Text>
        </View>
    )
}

export default Posts;