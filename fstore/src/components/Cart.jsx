import { useSelector } from "react-redux"
import Citem from './Citem'
import {View,ScrollView,StyleSheet,Text,TouchableOpacity} from 'react-native'
import { FontAwesome5 } from "@expo/vector-icons"
import { useEffect, useState } from "react"
import Log from './Log' 
import Header from "./Header"
function Cart(){

const items=useSelector(store=>store.cart.items)
const nitems=useSelector(store=>store.cart.items.length)
const tamt=useSelector(store=>store.cart.totamt)
const [c,setC]=useState(false)
useEffect(()=>{
  //alert('c')
 // setC(false)
},[c])
return(
        <>
<View style={styles.cont} >
    <Header nitems={nitems}/>
 <View style={{flex:1,flexDirection:"row"}}>
  <View style={{flex:1}}>
    <Text style={styles.txt}>Your Cart</Text>
       {items.map(item=>
    <View  style={styles.citem} >
       <Citem data={item}  />
    </View>    )}
    <Text  style={styles.txt}> Total Amount  <FontAwesome5  name="rupee-sign" size={15}  ></FontAwesome5> {tamt}</Text>
   
   
   <TouchableOpacity onPress={e=>setC(true)}>
    <View style={styles.v}>
      <Text style={styles.txt}>Checkout</Text>
    </View>
    </TouchableOpacity> 

    </View>
   <View style={{flex:1}}>
    {c?<Log />:<></>}
    </View>
  </View>
 </View>
        
        </>
    )
}

export default Cart

const styles=StyleSheet.create({
    cont:{
   marginTop:30,
   flex:1,
   flexDirection:"column"
},
citem:{
    marginTop:20,
    padding:10,

},
txt:{
   fontWeight:600,
   marginLeft:20, 
},
v:{
    backgroundColor:"darkcyan",
    padding:5,
    width:100,
    marginLeft:20,
    marginTop:30,
    borderRadius:10,
    borderWidth:2,
    borderColor:"black"
}
})