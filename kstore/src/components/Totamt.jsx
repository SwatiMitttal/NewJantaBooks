import { useSelector } from "react-redux"
import Citem from "./Citem"
import {View,StyleSheet,Text,ScrollView} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import axios from "axios"
import Header from "./Header"
import But from './But'
import Notify from './Notify'
import Button1 from "./Button1"
import { useEffect } from "react"
function Totamt(props){
const payl='https://razorpay.me/@newjantabooks'
const citems=useSelector(store=>store.cart.items)
const tamt=useSelector(store=>store.cart.totamt)
const dets=useSelector(store=>store.users.user)
const handleC=async()=>{
  try{
const res=await axios.post('https://newjvite3.onrender.com/orders',{email:dets.email,items:citems,tamt:tamt})
     if(res.status===200){
      console.log('order confirmed')
     }}
   catch(err){
  console.log(err)}}
useEffect(()=>{
  tamt? handleC()  :console.log('')
},[])

return (
<View style={{flex:1}}>
 { props.flag===true?   <></> : <Header nitems={citems.length} />   }
  <Text> Additional 5% less on prepaid orders </Text>
  <Notify  name={dets.name} />
  <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
       <Text style={styles.text}>Details</Text>
        <Text style={styles.text}>{dets.name}</Text>
        <Text style={styles.text}>{dets.mobile}</Text>
        <Text  style={styles.text}>Total items {citems.length}</Text>
        <Text  style={styles.text}>{dets.add1}</Text>
        
        <Text  style={styles.text}>{dets.city}</Text>
        <Text  style={styles.text}>{dets.state}</Text>
        <Text  style={styles.text}>{dets.pin}</Text>
        <Text  style={styles.text}> Total Amount  <FontAwesome5  name="rupee-sign" size={15}  ></FontAwesome5> {tamt}</Text>
        <View  style={{height:50}}></View>
{citems.map((item,ind)=>(
      <View style={{flex:1,flexDirection:"row"}}>
          <Text style={styles.text} >
        < Citem data={item} /> </Text>   </View>  
))}
<View style={{backgroundColor:"darkgoldenrod",width:180,marginBottom:50, borderRadius:10}}>
  <Text   style={{color:"white" ,padding:5}}>Your Order Confirmed</Text></View>
<But url={payl} child={"PAY NOW"} >PAY NOW</But>
       
  
      </ScrollView>
    </View>   
  )}

 export default Totamt
const styles = StyleSheet.create({
  container: { flex: 1, padding: 2, paddingTop: 1, width:400, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center',
    fontWeight:600,
    fontSize:14
    
   }})