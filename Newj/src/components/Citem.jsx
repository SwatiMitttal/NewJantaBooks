

import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeQ} from "../../store/Cart"
import {Text,StyleSheet,View,Image,Button} from 'react-native'
import { FontAwesome5 } from "@expo/vector-icons"
import Button1 from "./Button1"
function Citem(props){
   const {id,slug,imgurl,price,count,quantity,tamt}=props.data
   const [q,setQ]=useState(props.data.quantity)
   
   const dispatch=useDispatch()
    const handleAdd=()=>{
         
          dispatch(changeQ({id:id,quantity:(q+1),price:price}))
          setQ(quantity+1) }
   
       const handleRem=()=>{
          dispatch(changeQ({id:id,quantity:q-1,price:price}))
         setQ(quantity-1<1 ? 1:quantity-1)}

    return(
    <View  style={styles.cont1}>
        <Image  source={{uri:imgurl}}></Image>
        <Text  >{slug}</Text>
         <Image style={styles.img} source={{uri:imgurl}} >
                  </Image>
        <Text><FontAwesome5 name='rupee-sign' size={15}></FontAwesome5>{tamt}</Text>
           <View style={{flexDirection:"row"}}>
           <Button1 text='-' onPress={handleRem}>-</Button1>
            <Text style={styles.txt1} >{q}</Text>
            <Button1 text='+' onPress={handleAdd} >+</Button1>
            </View>
          </View>
    )
}

export default Citem
const styles=StyleSheet.create({
     cont1:{
      flex:1,
      flexDirection:"row",
      padding:10,
      justifyContent:"space-between",
      width:300,
      height:50},
     txt1:{
        marginLeft:10,
        marginRight:10,
     },
     but1:{
      marginLeft:10,
      marginRight:10,
      fontWeight:700,
      fontSize:16,
      color:"darkcyan"
     },
     img:{
      height:20,
      width:20
     }
})