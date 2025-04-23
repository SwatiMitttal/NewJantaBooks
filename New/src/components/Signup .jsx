import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import {View,TextInput,Text,StyleSheet,Button,} from 'react-native'

import axios from 'axios'
import { Entypo } from "@expo/vector-icons"
import { setU } from "../../store/Users"
function Signup({url}){
   
  const [isSignup,SetisSignup]=useState(false)
  const [email,setEmail]=useState('')
  const [mobile,setMobile]=useState('')
  const [passw,setPassw]=useState('')
  const [name,setName]=useState('')
  const  [add1,setAdd1]=useState("")
  const  [add2,setAdd2]=useState("")
  const  [city,setCity]=useState("")
  const  [stat,setStat]=useState("")
  const[tt,setTt]=useState('password')
  const  [country,setCountry]=useState("")
  const  [pin,setPin]=useState("")
  const [ff,setFf]=useState('')
  const ffields=['name','email','password','mobile','address1','address2','city','state','country','pincode'];
  const [data,setData]=useState({})
  
  const dispatch=useDispatch()
  const emaill=useSelector(store=>store.users.user)
  async function handleS(e){
    e.preventDefault()
    const user1= {
      name:name,email:email,
      passw:passw,mobile:mobile,
      add1:add1,add2:add2,
      city:city,stat:stat,
      country:country, pin:pin,newu:true}
      dispatch(setU(user1))
       const res=await axios.post(`${url}/signup`,data)
       if (res.status===200){
           alert('user added')
       }
    
    }
      
          
  const handleC=(e)=>{
     
    let nam=e.target.name
    let val=e.target.value
    setData(data=>({...data,[nam]:val}))
 }
return (<>
<View>
<Text style={styles.txt} >SIGNUP</Text>
<View style={styles.cont1}>
  
  <View  style={{flexDirection:"column"}}>
       {ffields.map((item,ind)=>(
        <View style={{flexDirection:"row"}}>
         <Text style={styles.txt}>{item}</Text>
         <TextInput  name={item} style={styles.tinput} 
             onChange={e=>handleC(e)}  placeholder={item}
         ></TextInput></View>
    ))}
  </View>
    
<Text style={styles.contr} onClick={e=>handleS(e)}>
   SUBMIT</Text>
</View>
</View>
</>  
)
}
export default Signup

const styles=StyleSheet.create({
  txt:{
    fontWeight:600,
    color:"darkcyan",
    padding:2,
  },
  cont1:{
    marginLeft:20,
    flexDirection:"row"
  },
  tinput:{
      color:"darkcyan",
      borderColor:"darkcyan",
      borderWidth:2,
      height:20,
      borderRadius:6,
      marginLeft:70,
      position:"absolute",
      padding:2,
      
  },
  contr:{
    position:"absolute",
    marginLeft:340,
    backgroundColor:"black",
    color:"white",
    padding:6,
    borderRadius:6,
  }
})


