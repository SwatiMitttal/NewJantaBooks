
import {View,Text} from 'react-native'
import {createBottomTabNavigator}  from '@react-navigation/bottom-tabs'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Entypo from '@expo/vector-icons/Entypo'
import { Provider } from "react-redux"
import appStore from '../store/appStore'
import Homesc from '../src/screen/Homesc'
import Totamt from '../src/components/Totamt'
import Log from '../src/components/Log'
export default function RootLayout() {
  const tab=createBottomTabNavigator()
   return (
 <Provider   store={appStore}> 
    <tab.Navigator  screenOptions={{
      headerShown:false,
      tabBarShowLabel:false
    }}>
    
    <tab.Screen name="Home" component={Homesc} options={
          { tabBarIcon:()=>{return <AntDesign name={"home"} size={25} color={"darkcyan"}></AntDesign>}}
         }/>

    <tab.Screen name="Account" component={Log} options={
          { tabBarIcon:()=>{return <Entypo name={"user"} size={25} color={"darkcyan"}></Entypo>}}
         }></tab.Screen>

<tab.Screen name="Total" component= {Totamt} options={
          { tabBarIcon:()=>{return <FontAwesome5 name={"gift"} size={25} color={"darkcyan"}></FontAwesome5>}}
         }></tab.Screen>
  </tab.Navigator>
  </Provider>
  
  )}

  
