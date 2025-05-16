import { useSelector } from "react-redux";
import {Text,View} from 'react-native'
import Button1 from './Button1'
import axios from 'axios'
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
function Ruser(){
   const [user,setUser]=useState(useSelector(store=>store.users.user))
    const handleP=async()=>{

        const res=await axios.post('https://newjvite3.onrender.com/ruser',user.email)
        if (res.status===200){
            alert('account deleted')
        }
    }
 return(<>
    
    <View>
        <Text>{user.email}</Text>
  <Text><FontAwesome5 name={"trash"} size={15} color={"darkgoldenrod"}     />Account</Text>
  <Button1 onPress={handleP} text='Remove account'  ></Button1>

    </View>  :<></>  
    </>)
}

export default Ruser