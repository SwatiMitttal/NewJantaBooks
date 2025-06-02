
import { useEffect, useState } from 'react';
import { captureRef, captureScreen } from 'react-native-view-shot'
import {View,Text} from 'react-native'
//import ReactWhatsapp from 'react-whatsapp'
function Pshot(){

    const [uri,SetUri]=useState('')

    useEffect(()=>{
       Capture()
    },[])
    const Capture=async ()=>{
        let url=''
           try {
           url = await captureScreen({
            format: 'png', 
            quality: 0.9, 
          });
          console.log('Full screenshot saved to', url)} 
          catch (e) {
          console.error('Error capturing full screenshot', e);
        }
        SetUri(url)
      }
    

    return(
        <>
       {uri &&  <Text style={{fontWeight:600}}>Helloo</Text>  }
        
        </>
    )
}

export default Pshot