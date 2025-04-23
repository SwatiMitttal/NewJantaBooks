

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
        <Image style={{height:30,width:30}} source={{uri:imgurl}}></Image>
        <Text  >{slug}</Text>
        <Text><FontAwesome5 name='rupee-sign' size={10}></FontAwesome5>{tamt}</Text>
           <View style={{flexDirection:"row"}}>
           <Button1 text='-'  onPress={handleRem}></Button1>
            <Text style={styles.txt1} >{q}</Text>
            <Button1 text='+'  onPress={handleAdd} ></Button1>
            <View  style={{height:20}}></View>
            </View>
          </View>
    )
}

export default Citem

const styles=StyleSheet.create({
     cont1:{
      flex:1,
      flexDirection:"row",
      justifyContent:"space-between",
      width:200,
      height:30,
      marginLeft:20
     },
     txt1:{
        marginLeft:2,
        marginRight:10,
        fontWeight:800,
     },
     but1:{
      marginLeft:2,
      marginRight:2,
      fontWeight:800,
     }
})