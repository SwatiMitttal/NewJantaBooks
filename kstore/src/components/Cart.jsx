import { useSelector } from "react-redux"
import Citem from './Citem'
import {View,ScrollView,StyleSheet,Text,TouchableOpacity} from 'react-native'
import { FontAwesome5 } from "@expo/vector-icons"
import { useState } from "react"
import Log from './Log' 
import Header from "./Header"
import Button1 from "./Button1"
import {Link,useRouter} from 'expo-router'
import { Entypo } from "@expo/vector-icons"
function Cart({navigation}){
const router=useRouter()
const items=useSelector(store=>store.cart.items)
const nitems=useSelector(store=>store.cart.items.length)
const tamt=useSelector(store=>store.cart.totamt)
const [f,setF]=useState(false)


const  handleA=()=>{
   setF(true)
   
   
}
return(
        <>
   
<View style={styles.cont} showsVerticalScrollIndicator={false} >
    <Header nitems={nitems}/>
 <View style={{flex:1,flexDirection:"column"}}>
  <View style={{flex:1 ,marginTop:130}}>
    <Text style={styles.txt}>Your Cart</Text>
       {items.map(item=>
    <View  style={styles.citem} >
       <Citem data={item}  />
    </View>    )}
    <Text  style={styles.txt}> Total Amount  <FontAwesome5  name="rupee-sign" size={15}  ></FontAwesome5> {tamt}</Text>
 
 <View  style={{flex:1,flexDirection:"row",marginLeft:200 ,marginTop:40}}>
   <Button1  text=' Press Login Icon Below' onPress={handleA} ></Button1> 
   </View>
    </View>
   <View style={{flex:1}}>
    {f  && <Log/>}
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
 cont1:{
      backgroundColor:"darkgoldenrod",
       height:30,
       width:100,
       borderRadius:10,
       textAlign:"center",
       padding:2,
   },
  
 cont2:{
  backgroundColor:"goldenrod",
   height:30,
   width:100,
   borderRadius:10,
   textAlign:"center",
   padding:2,
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
    backgroundColor:"darkgoldenrod",
    padding:5,
    width:100,
    marginLeft:20,
    marginTop:30,
    borderRadius:10,
    borderWidth:2,
    borderColor:"black"
}
})