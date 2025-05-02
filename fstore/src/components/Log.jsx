
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { TextInput,Text,View,StyleSheet } from "react-native";
import axios from "axios"
import Button1 from "./Button1";
import { setU } from "../../store/Users";
import Signup from './Signup '
import Totamt from './Totamt'
import Spanel from './Spanel'
import Header from './Header'
import Register from './Register'
function Log(){
const [email,setEmail]=useState('');
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
    alert('user registered')
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
 <View  style={{flex:1,backgroundColor:"grainsboro"}}>
       <Header nitems={nitems}/>
    <Text style={styles.txt1}>Enter email</Text>
    <View style={styles.cont1}>
     <TextInput  id='email'placeholder='email'
       style={styles.tinput}
       onChange={(e)=>{setEmail(e.target.value)}}  >
    </TextInput>
    
     </View>
      <View  style={{height:20}}></View>
   {!user && c?<></> : <Button1 text='Place Order'
     onPress={e=>handleS(e)}
     ></Button1>   }
   {!user && c ?<></>:<Spanel/>      }
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
  backgroundColor:"beige",
  height:59,
  borderRadius:10,
  borderColor:"darkcyan",
  borderWidth:2,
  color:"darkcyan"
},
  txtb:{
    color:"white",
   
  },
cont1:{
    flexDirection:"column",
     height:40,
    width:300,
    borderRadius:10,
    marginLeft:10,
    backgroundColor:"beige"
},
txt1:{fontWeight:600,color:"darkcyan"},

cont3:{
   width:90,
   marginLeft:10,
   marginTop:20,
   backgroundColor:"darkcyan",
    padding:8,
    borderRadius:8,
}
})

