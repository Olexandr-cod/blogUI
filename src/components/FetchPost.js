import React from "react"
import {Button } from "react-native"
import Posts from "../components/Posts"

const FetchPost = ({post}) => {
    if (!post.length){
        return <Button title="Fetch Posts" />
    }
    return post.map(item => <Posts post={item} key={item}/>)
}

export default FetchPost;