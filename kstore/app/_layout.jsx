import { Stack } from "expo-router";
//import registerNNPushToken from 'native-notify'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View,StyleSheet,Image} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Ruser from '../src/components/Ruser'
import Homesc from "../src/screen/Homesc"
import Log from '../src/components/Log'
import { Provider} from "react-redux"
import 'react-native-get-random-values'
import Detail from '../src/components/Detail'
import Cart from '../src/components/Cart'
import appStore from '../store/appStore'
import Totamt from '../src/components/Totamt'
import registerNNPushToken from 'native-notify'

export default function RootLayout() {
   
  const tab=createBottomTabNavigator()
  registerNNPushToken(30426, '7SLiUwHUY8HBu5TBQj35QG')
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

          <tab.Screen name="Cart" component= {Cart} options={
          { tabBarIcon:()=>{return <>
             <View style={{fontWeight:700,fontSize:16,color:"red"}}></View><Entypo name={"shopping-cart"}  
             size={25} color={"darkgoldenrod"}></Entypo></>}}
         }></tab.Screen>

        <tab.Screen name="Account" component= {Log} options={
          { tabBarIcon:()=>{return <Entypo name={"user"} size={15} color={"darkgoldenrod"}>login</Entypo>}}
         }></tab.Screen>

        <tab.Screen name="Total" component= {Totamt} options={
          { tabBarIcon:()=>{return <FontAwesome5 name={"gift"}    size={15} color={"darkgoldenrod"}>checkout</FontAwesome5>}}
         }></tab.Screen>

          <tab.Screen name="detail" component= {Detail } options={
          { tabBarIcon:()=>{return <></>}}
         }></tab.Screen>

         <tab.Screen name="Ruser" component= {Ruser} options={
          { tabBarIcon:()=>{return <FontAwesome5 name={"trash"}    size={15} color={"darkgoldenrod"}>account</FontAwesome5>}}
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

