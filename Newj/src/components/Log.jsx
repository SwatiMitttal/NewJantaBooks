import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { TextInput,Text,View,Button,StyleSheet ,TouchableOpacity} from "react-native";
import axios from "axios"
import Button1 from "./Button1";
import { setU } from "../../store/Users";
import Spanel from './Spanel'
import Header from './Header'
import Register from "./Register";
import auth, { firebase } from '@react-native-firebase/auth';
import { ReactNativeFirebase } from "@react-native-firebase/app";

function Log(){
const [email,onChangeText]=useState('')
const [code,setCode]=useState('')
const [user,setUser]=useState(false)
const [c,setC]=useState(false)
const nitems=useSelector(store=>store.cart.items.length)
 const dispatch=useDispatch()
async function handleS(e){
  e.preventDefault()
  setC(true)

try{
   const res= await axios.post('https://newjvite3.onrender.com/login',{email:email})
   if(res.status===200) { 
   dispatch(setU({email:res.data.email,
      name:res.data.name,
      passw:res.data.passw,
      mobile:res.data.mobile,
      add1:res.data.add1,
      add2:res.data.add2,
      city:res.data.city,
      stat:res.data.stat,
      country:res.data.country,
      pin:res.data.pin,
    newu:false}))
  setUser(true)
  
  }else{ }}
    catch(err){
        console.log(err.message)
      }}

useEffect(()=>{
  setUser(false)
},[])
return(
    <>
 <View  style={{flex:1}}>
       <Header nitems={nitems}/>
    <Text style={styles.txt1}>Enter email</Text>
   
    <TextInput id='email'placeholder='email'
       style={styles.tinput}
       onChangeText={onChangeText}
       value={email}
       >
    </TextInput>
   <View  style={styles.cont3}>
    <Button1  text='Confirm'  onPress={e=>handleS(e)}  />
   </View>
 {!user && c?<></>:<Spanel/>   }
   {!user && c?<Register mail={email}/>:<></>}
</View> 
    </>
   )}

export default Log
const styles=StyleSheet.create({
     txt1:{ fontWeight:600,
      color:"darkcyan"},
  tinput:{
  fontSize:14,
  fontWeight:400,
  backgroundColor:"white",
  height:40,
  borderRadius:10,
  borderColor:"darkcyan",
  borderWidth:2,
  color:"darkcyan"
},
cont1:{
    flexDirection:"column",
     height:20,
    width:300,
    borderRadius:10,
    marginLeft:10,
},
txt1:{fontWeight:600},
cont:{
  backgroundColor:"darkcyan",
  borderRadius:10
},
cont3:{
   width:100,
   marginLeft:10,
   marginTop:2,
    
}
})
/* <TextInput value={code} onChangeText={text => setCode(text)} />
         <TouchableOpacity style={styles.cont} onPress={() => confirmCode()} >
              <Text></Text>
          </TouchableOpacity>

     useEffect(() => {
    firebase.initializeApp({
      apiKey:''
    })  
     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, [])*/