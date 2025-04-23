
import { useState,useRef } from "react"
import { useDispatch } from "react-redux"
import {View,TextInput,Text,StyleSheet,Button} from 'react-native'
import { StandaloneSearchBox ,useJsApiLoader} from "@react-google-maps/api"
import axios from 'axios'
import { setU } from "../../store/Users"
import Button1 from './Button1'
// // googleMapsApiKey: 'AIzaSyA-yOjY6-NDpkMWFhSr2gC0UtZuyc69qXs'(web)

function Register(props){
    const [add,onChangeText]=useState('')
  
    const iref=useRef()
    const handlePc=()=>{
        let add=iref.current.getPlaces()
        const len=add[0].formatted_address.split(',').length
        const details=add[0].formatted_address.split(',')
          setPin(details[len-1])
          setCountry(details[len-2])
          setState(details[len-3])
          setCity(details[len-4])
          setAdd1(details.slice(0,len-5))
       }
      
     const { isLoaded } = useJsApiLoader({
               id: 'google-map-script',
                googleMapsApiKey:'AIzaSyCQxWEFRtkp67knHFCEHquvqaaC4LoVRp8',
            libraries:['places']})

   const [name,setName]=useState('')
     const [email,setEmail]=useState('')
     const [passw,setPassw]=useState('')
     const [mobile,setMobile]=useState('')
     const [pin,setPin]=useState('')
     const [country,setCountry]=useState('')
     const [state,setState]=useState('')
     const [city,setCity]=useState('')
     const [add1,setAdd1]=useState('')
      const ffields=['name','email','password','mobile','address'];
       const dispatch=useDispatch()

       async function handleS(e){
        e.preventDefault()
        const user1= {
          name:name,email:props.mail,
          passw:passw,mobile:mobile,
          add1:add1,pin:pin,country:country,city:city,stat:state,newu:true}
          dispatch(setU(user1))
          alert(user1.country)
          const res=await axios.post('https://newjvite3.onrender.com/signup',user1)
           if (res.status===200){
               alert('user added')
           }}
  return(<>

  <View style={{flex:1}}>
  <Text style={styles.txt} >SIGNUP</Text>
  <View style={styles.cont1}>
    <View  style={{flexDirection:"column"}}>
         {ffields.map((item,ind)=>
          <View style={{flexDirection:"row"}}>
           <Text style={styles.txt}>{item}</Text></View>)}</View>

     <View  style={{flexDirection:"column"}}>   
           <TextInput  placeholder='name'
              onChangeText={setName}  
              value={name} 
              style={styles.tinput} 
               />
             <TextInput  placeholder='email'
              onChangeText={setEmail}  
              value={props.mail} 
              style={styles.tinput} 
               />
               <TextInput  placeholder='passw'
              onChangeText={setPassw}  
              value={passw} 
              style={styles.tinput} 
               />
                <TextInput  placeholder='mobile'
              onChangeText={setMobile}  
              value={mobile} 
              style={styles.tinput} 
               />
              { isLoaded &&  <StandaloneSearchBox
                 onLoad={(ref)=>iref.current=ref}
                 onPlacesChanged={handlePc}>
                
                    <TextInput  placeholder='address'
                             onChangeText={onChangeText}  
                             value={add} 
                             style={styles.tinput1} 
                              />
                 </StandaloneSearchBox>}
                 </View>
             </View>
  <Button1 text="Submit"  onPress={e=>handleS(e)}  />
  </View>
</>)
  
}

export default Register
const styles=StyleSheet.create({
  txt:{
    fontWeight:600,
    color:"darkcyan",
    padding:2,
    height:32
  },
  cont1:{
    marginLeft:20,
    flexDirection:"row"
  },
  tinput:{
      color:"darkcyan",
      borderColor:"darkcyan",
      borderWidth:2,
      height:30,
      borderRadius:6,
      marginLeft:70,
      padding:2,
      width:200
  },
  buts:{
    width:150
  },
  tinput1:{
    boxSizing: `border-box`,
     border: `1px solid black`,
     width: `240px`,
     height: `40px`,
     position:'absolute',
     borderRadius: `3px`,
     boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
     fontSize: `14px`,
     outline: `none`,
     textOverflow: `ellipses`,
     left: "50%",
     marginLeft: '10',
     color:"darkcyan"
   },
})


