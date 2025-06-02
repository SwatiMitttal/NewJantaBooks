import { Stack } from "expo-router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View,StyleSheet,Image} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import 'react-native-get-random-values'
import Homesc from "../src/screen/Homesc"
import Log from '../src/components/Log'
import { Provider } from "react-redux"
import appStore from '../store/appStore'
import Totamt from '../src/components/Totamt'
import Detail from '../src/components/Detail'
import Cart from '../src/components/Cart'
import registerNNPushToken from 'native-notify'
import { useSelector } from "react-redux";
export default function RootLayout() {
   
  const tab=createBottomTabNavigator()
  registerNNPushToken(30481, 'F9Uxvb0blXsfkqzP7sR3Pb')
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
          { tabBarIcon:()=>{return <AntDesign name={"home"} size={25} color={"darkcyan"}></AntDesign>}}
         }/>

          <tab.Screen name="Cart" component= {Cart} options={
          { tabBarIcon:()=>{return <>
             <Text style={{fontWeight:700,fontSize:16,color:"red"}}></Text><Entypo name={"shopping-cart"}  
             size={25} color={"darkcyan"}></Entypo></>}}
         }></tab.Screen>

        
         
       <tab.Screen name="Account" component= {Log} options={
          { tabBarIcon:()=>{return <Entypo name={"user"} size={15} color={"darkcyan"}>Login</Entypo>}}
         }></tab.Screen>

          <tab.Screen name="Total" component= {Totamt} options={
          { tabBarIcon:()=>{return <FontAwesome5 name={"gift"}    size={15} color={"darkcyan"}>checkout</FontAwesome5>}}
         }></tab.Screen> 

          <tab.Screen name="Detail" component= {Detail} options={
          { tabBarIcon:()=>{return <></>}}
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

