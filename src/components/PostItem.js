import React from "react";
import { Text } from "react-native";
import Posts from "./Posts"




const PostItem = ({post}) => {
    if (!post.length){
        return <Text>Post don't</Text>
    }else{
        return post.map(item => <Posts post={item} key={item}/>)
    }
      
    
}

export default PostItem;