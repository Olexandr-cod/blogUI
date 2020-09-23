import React  from "react"
import { Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from "@react-navigation/stack"
import {createDrawerNavigator} from "@react-navigation/drawer"

import FeedScreen from "../screens/FeedScreen";
import MessageScreen from "../screens/MessageScreen";
import SearchScreen from "../screens/SearchScreen";
import DialogsScreen from "../screens/DialogsScreen"
import FriendScreen from "../screens/FriendScreen"
import FilmScreen from "../screens/FilmScreen";
import MusicScreen from "../screens/MusicScreen";
import PostFormScreen from "../screens/PostFormScreen"
import FetchPostScreen from "../screens/FetchPostScreen" 



const FeedStack = createStackNavigator();
const MessageStack = createStackNavigator();
const SearchStack = createStackNavigator();


const DialogStack = createStackNavigator();
const MusicStack = createStackNavigator();

const FilmStack = createStackNavigator();

const FriendStack = createStackNavigator();

const PostFormStack = createStackNavigator();
const FetchPostStack = createStackNavigator();



const DialodStackScreens = () => {
  return(
    <DialogStack.Navigator>
      <DialogStack.Screen name="Dialog" component={DialogsScreen} />
    </DialogStack.Navigator>
  )
}
const MusicStackScreens = () => {
  return(
    <MusicStack.Navigator>
      <MusicStack.Screen name="Music" component={MusicScreen} />
    </MusicStack.Navigator>
  )
}
const FeedStackScreen = () => {
  return(
    <FeedStack.Navigator>
      <FeedStack.Screen name="Feed" component={FeedScreen} options={{headerRight: () => (<TouchableOpacity><Text>BAD</Text></TouchableOpacity>), headerLeft: () => (<TouchableOpacity><Text>Back out</Text></TouchableOpacity>) }} />
      <FeedStack.Screen name="Message" component={MessageScreen}  />
    </FeedStack.Navigator>
  )
}
const MessageStackScreen = () => {
  return(
    <MessageStack.Navigator>
      <MessageStack.Screen name="Message" component={MessageScreen} />
    </MessageStack.Navigator>
  )
}
const SearchStackScreen = () => {
  return(
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
    </SearchStack.Navigator>
  )
}
const FriendStackScreen = () => {
  return(
    <FriendStack.Navigator>
      <FriendStack.Screen name="Friend" component={FriendScreen} />
    </FriendStack.Navigator>
  )
}
const FilmStackScreen = () => {
  return(
    <FilmStack.Navigator>
      <FilmStack.Screen name="Films" component={FilmScreen} />
    </FilmStack.Navigator>
  )
}
const PostFormStackScreen = () => {
  return(
    <PostFormStack.Navigator>
      <PostFormStack.Screen name="Post Form" component={PostFormScreen} />
    </PostFormStack.Navigator>
  )
}
const FetchPostStackScreen = () => {
  return(
    <FetchPostStack.Navigator>
      <FetchPostStack.Screen name="Fetch Post" component={FetchPostScreen} />
    </FetchPostStack.Navigator>
  )
}



const Tab = createBottomTabNavigator();
const AllTab = createBottomTabNavigator();
const PostTab = createBottomTabNavigator();


const TabNavigator =() => {
  return(
      <Tab.Navigator initialRouteName="Feed" tabBarOptions={{activeTintColor: "gold", inactiveTintColor: "grey", labelStyle:{fontSize: 18}}} >
        <Tab.Screen name="Feed" component={FeedStackScreen}  />
        <Tab.Screen name="Message" component={MessageStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
      </Tab.Navigator>
  )
}
const AllTabNavigator =() => {
  return(
      <AllTab.Navigator initialRouteName="Friend" tabBarOptions={{activeTintColor: "gold", inactiveTintColor: "grey", labelStyle:{fontSize: 18}}} >
        <AllTab.Screen name="Friend" component={FriendStackScreen}  />
        <AllTab.Screen name="Search" component={SearchStackScreen} />
      </AllTab.Navigator>
  )
}
const PostTabNavigator =() => {
  return(
      <PostTab.Navigator initialRouteName="PostForm" tabBarOptions={{activeTintColor: "gold", inactiveTintColor: "grey", labelStyle:{fontSize: 18}}} >
        <PostTab.Screen name="PostForm" component={PostFormStackScreen}  />
        <PostTab.Screen name="FetchForm" component={FetchPostStackScreen} />
      </PostTab.Navigator>
  )
}



const Drawer = createDrawerNavigator();

const MenuDrawerContent = ({navigation}) => {
  return(
    <SafeAreaView style={{flex:1, backgroundColor: "gold"}}>
      <ScrollView>
        <TouchableOpacity style={{marginTop: 20, marginLeft: 20}} onPress={() => navigation.navigate("Feed") }>
        <Text style={{color: "blue", fontSize: 25}}>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 20, marginLeft: 20}} onPress={() => navigation.navigate("All") }>
          <Text style={{color: "blue", fontSize: 25}}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 20, marginLeft: 20}} onPress={() => navigation.navigate("Films") }>
          <Text style={{color: "blue", fontSize: 25}}>Cinema</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 20, marginLeft: 20}} onPress={() => navigation.navigate("Dialogs") }>
          <Text style={{color: "blue", fontSize: 25}}>Dialog</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 20, marginLeft: 20}} onPress={() => navigation.navigate("Music") }>
          <Text style={{color: "blue", fontSize: 25}}>Music</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 20, marginLeft: 20}} onPress={() => navigation.navigate("Posts") }>
          <Text style={{color: "blue", fontSize: 25}}>Posts</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  ) 
}

 
export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => MenuDrawerContent(props)} >
        <Drawer.Screen name="Feed" component={TabNavigator} />
        <Drawer.Screen name="All" component={AllTabNavigator}  />
        <Drawer.Screen name="Dialogs" component={DialodStackScreens}  />
        <Drawer.Screen name="Music" component={MusicStackScreens} />
        <Drawer.Screen name="Films" component={FilmStackScreen} />
        <Drawer.Screen name="Posts" component={PostTabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


