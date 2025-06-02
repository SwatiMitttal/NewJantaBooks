

import { Linking , SafeAreaView,StyleSheet, View,Text,
  TouchableOpacity,
  TextInput,} from 'react-native'
import Button1 from './Button1'
import { useEffect } from 'react'

function Wapp(props){
      let msg='Hare Krishna   -Deepti Order Recieved'   
      const mobile=props.mobile

      const handleP=()=>{
        if (mobile){
            let url='whatsapp://send?text='+msg+ '&phone='+mobile
            Linking.openURL(url).then(
                data=>{alert('whatsapp opened')}
            ).catch(()=>{
                alert('Make sure whatsapp installed on your device')
            })
        }else{
            alert('Pls enter a valid mobile number')
        }
      }

      useEffect(()=>{
        handleP()
      },[])
    return(
        <View>
      <Text  style={{fontSize:12,fontWeight:600}}>{props.mobile}</Text>
      
        </View>
    )
}

export default Wapp







