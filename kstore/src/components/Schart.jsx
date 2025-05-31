
import {View,Text} from 'react-native'


import { useState } from 'react'
function Schart(){
  const sizes=['xs','s','md','xl','xxl']
  const [s,setS]=useState('')
 
    return(
        <View style={{flexDirection:"row"}}>
        
          { sizes.map((item,i)=>  (<Text style={{fontWeight:600,marginLeft:5}}
            onPress={e=>setS(i)}
          >{item}</Text> ))}
        </View>
    )
}

export default Schart

// 

        