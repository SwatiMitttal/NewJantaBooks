import { Stack } from "expo-router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View,StyleSheet,Image} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

import Homesc from "../src/screen/Homesc"
import Log from '../src/components/Log'
import { Provider, useSelector } from "react-redux"
import appStore from '../store/appStore'
import Totamt from '../src/components/Totamt'
import { useState,useContext, createContext } from "react";

export default function RootLayout() {
   
  const tab=createBottomTabNavigator()

  function Home(){
    return(
      <View><Text>Home</Text></View>
    )
  }
  
  
  return <>
  
  <Provider store={appStore} >
   <tab.Navigator  screenOptions={{
    headerShown:false,
    tabBarShowLabel:false
  }}>
        <tab.Screen name="Home" component={Homesc} options={
          { tabBarIcon:()=>{return <AntDesign name={"home"} size={25} color={"darkgoldenrod"}></AntDesign>}}
         }/>
        <tab.Screen name="Account" component= {Log} options={
          { tabBarIcon:()=>{return <Entypo name={"user"} size={25} color={"darkgoldenrod"}></Entypo>}}
         }></tab.Screen>

        <tab.Screen name="Total" component= {Totamt} options={
          { tabBarIcon:()=>{return <FontAwesome5 name={"gift"}    size={25} color={"darkgoldenrod"}></FontAwesome5>}}
         }></tab.Screen>
 </tab.Navigator>
 
    </Provider>
  </>;
}

const styles=StyleSheet.create({
    ccart:{
        backgroundColor:"goldenrod",
        height:50,
        borderRadius:30,
        width:30,
        justifyContent:"center",
        
    }
})

