
import {View} from 'react-native'
import { useRef, useState} from "react"
import { StandaloneSearchBox ,useJsApiLoader} from "@react-google-maps/api"
import { StyleSheet } from "react-native"
import { TextInput } from 'react-native'
 export default function Address(){
  const iref=useRef()
  const [add,setAdd]=useState('')
   const handlePc=()=>{
        let add=iref.current.getPlaces()
      }
     
    const { isLoaded } = useJsApiLoader({
              id: 'google-map-script',
              googleMapsApiKey: 'AIzaSyA-yOjY6-NDpkMWFhSr2gC0UtZuyc69qXs'||'AIzaSyCQxWEFRtkp67knHFCEHquvqaaC4LoVRp8',
              libraries:['places']
            })
return(<>
 <View  style={styles.cont}>
         <View  style={styles.v1} >
       { isLoaded &&  <StandaloneSearchBox
     onLoad={(ref)=>iref.current=ref}
     onPlacesChanged={handlePc}>
    
        <TextInput  placeholder='address'
                 onChangeText={setAdd}  
                 value={add} 
                 style={styles.tinput} 
                  />
     </StandaloneSearchBox>}
     </View></View>
</>)}



const styles=StyleSheet.create({
  tinput:{
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
  cont:{
    flex:1
  },
  v1:{
     width:200, 
  }
})

