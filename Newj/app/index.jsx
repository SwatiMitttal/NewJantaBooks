import { Text, View,StyleSheet,Button } from "react-native";
//android:373613249976-g6pb5m6flcv1pvucef2gocm9ohr3qh5u.apps.googleusercontent.com
//web:373613249976-9bdfj72fgfri91iersqc30or6osu6h0k.apps.googleusercontent.com
import * as Browser from 'expo-web-browser'
//import * as Google from 'expo-auth-session/providers/google'
import { useEffect, useState } from "react";


Browser.maybeCompleteAuthSession()
export default function Index() {

  const [uinfo,setUinfo]=useState()
   const [req,res,pasync]=Google.useAuthRequest({
      androidClientId:'373613249976-g6pb5m6flcv1pvucef2gocm9ohr3qh5u.apps.googleusercontent.com',
      webClientId:'373613249976-9bdfj72fgfri91iersqc30or6osu6h0k.apps.googleusercontent.com'
   })
async function handleS(){
   const user=await AsyncStorage.getItem('@user')
   if(!user){
      if(res?.type==='success'){
          await getinfo(res.authentication.accessToken)  }
   }else{
       setUinfo(JSON.parse(user))
   }
}
const getinfo=async (token)=>{
     if (!token) return
         try{
          const res=await fetch('https://www.googleapis.com/usrinfo/v2/me',
            {
              headers:
              {Authorization:`Bearer ${token}`,
              
               
            },
             
            }
          )  
          
          const user=await res.json()
          await AsyncStorage.setItem('@user',JSON.stringify(user))
           setUinfo(user)
         }catch(e){
            console.log(e.message)
         }}

      useEffect(()=>{
         handleS()
      },[res])
  return (
    <View style={styles.cont}>
     
      <Text style={styles.txt}>NewJanta.Signin</Text>
      <Button  title='Sign in with Google' onPress={pasync}  ></Button>
    </View>
  );
}

const styles=StyleSheet.create({
  cont:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",

  },
  txt:{
    color:"darkcyan",
    fontWeight:600
  }
})
