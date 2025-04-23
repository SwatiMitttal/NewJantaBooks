

import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeQ} from "../../store/Cart"
import {Text,StyleSheet,View,Image,Button} from 'react-native'
import { FontAwesome5 } from "@expo/vector-icons"
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
        <Text><FontAwesome5 name='rupee-sign' size={15}></FontAwesome5>{tamt}</Text>
           <View style={{flexDirection:"row"}}>
           <Button style={styles.but1}  title='-' onPress={handleRem}></Button>
            <Text style={styles.txt1} >{q}</Text>
            <Button style={styles.but1}  title='+' onPress={handleAdd} ></Button>
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
      height:50

     },
     txt1:{
        marginLeft:10,
        marginRight:10,
     },
     but1:{
      marginLeft:10,
      marginRight:10
     }
})