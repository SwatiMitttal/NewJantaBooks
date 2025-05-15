
import { useState,useRef } from "react"
import { useDispatch } from "react-redux"
import {View,TextInput,Text,StyleSheet} from 'react-native'

import axios from 'axios'
//import {KeyboardAwareScrollView}  from 'react-native-keyboard-aware-scroll-view'
import { setU } from "../../store/Users"
import Button1 from './Button1'
import {GooglePlacesAutocomplete}  from 'react-native-google-places-autocomplete'
// // googleMapsApiKey: 'AIzaSyA-yOjY6-NDpkMWFhSr2gC0UtZuyc69qXs'(web)
//places api:AIzaSyA-yOjY6-NDpkMWFhSr2gC0UtZuyc69qXs

function Register(props){
    const [add,onChangeText]=useState('')
  
    const iref=useRef()
    const handlePc=(data)=>{
      const t=data.split(',')
      const len=t.length
     
           // setPin(det[len-1].short_name)
                setCountry(t[len-1])
                setStat(t[len-2])
                setCity(t[len-3])
                setAdd1(t[0]+t[1]+t[2])
                console.log(len,t,city,country,stat)
      }
    
      
 

   const [name,setName]=useState('')
     const [email,setEmail]=useState('')
     const [passw,setPassw]=useState('')
     const [mobile,setMobile]=useState('')
     const [pin,setPin]=useState('')
     const [country,setCountry]=useState('')
     const [stat,setStat]=useState('')
     const [city,setCity]=useState('')
     const [add1,setAdd1]=useState('')
     const [c,setC]=useState(false)
      const ffields=['name','email','password','mobile',];
       const dispatch=useDispatch()

   async function handleS(e){
       // e.preventDefault()
        console.log('hello')
        const user1= {
          name:name,email:props.mail,
          passw:passw,mobile:mobile,
          add1:add1,pin:pin,country:country,city:city,stat:stat,newu:true}
          dispatch(setU(user1))
          //alert(user1.country)
          const res=await axios.post('https://newjvite3.onrender.com/signup',user1)
           if (res.status===200){
               alert('user added')
           }}
  return(<>

  <View style={{flex:1}}>
  <Text style={styles.txt} >SIGNUP</Text>
  <GooglePlacesAutocomplete  
                  placeholder="address"
                  onPress={(data,detail=null)=>{
                    console.log(detail.description)
                    handlePc(data.description)
                    setC(true)
                  }}
                 onChange={e=>setC(false)}
                query={{
                  key:'AIzaSyA-yOjY6-NDpkMWFhSr2gC0UtZuyc69qXs',
                  language:'en'
                }} 
                style={{width:300,height:600}}
                />
 
{  c?
  <View style={styles.cont1}>

       <View  style={{flexDirection:"column"}}>
        {ffields.map((item,ind)=>
          <View style={{flexDirection:"row"}}>
           <Text style={styles.txt}>{item}</Text></View>)}</View>

   <View  style={{flexDirection:"column"}}>   
       <View>
           <TextInput  placeholder='name'
              onChangeText={setName}  
              value={name} 
              style={styles.tinput} 
               />
             <TextInput  placeholder={props.mail}
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
           </View> 
         
          </View></View> :<></>  }
         
            
  <Button1 text="Submit"  onPress={handleS}  />
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
      marginLeft:20,
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


/*   { isLoaded &&  <StandaloneSearchBox
                 onLoad={(ref)=>iref.current=ref}
                 onPlacesChanged={handlePc}>
                
                    <TextInput  placeholder='address'
                             onChangeText={onChangeText}  
                             value={add} 
                             style={styles.tinput1} 
                              />
                 </StandaloneSearchBox>}

                  const { isLoaded } = useJsApiLoader({
               id: 'google-map-script',
                googleMapsApiKey:'AIzaSyCQxWEFRtkp67knHFCEHquvqaaC4LoVRp8',
            libraries:['']})  */