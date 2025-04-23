import { useSelector } from "react-redux"
import Citem from "./Citem"
import {View,StyleSheet,Text,Linking,Button} from 'react-native'
import FontAwesome5 from '@expo/vector-icons'
import axios from "axios"

import { useCallback, useEffect } from "react"
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import Header from "./Header"

function Totalamt({}){
const payl='https://razorpay.me/@rangkesar'
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
const addu=async()=>{
    const res=await axios.post('https://newjvite3.onrender.com/signup',dets)
     if (res.status===200){
      alert('email added')
     }}
useEffect(()=>{
    if(dets.newu===true){
    addu()}
  },[])

  const But=({url,child})=>{
    const handleP = useCallback ( async () => {
    const sup = await Linking.canOpenURL(url);
    if(sup){
      await Linking.openURL(url)
    }},[])
   return <Button  title={child} onPress={handleP} />
  }

return (
<View style={{flex:1}}>
  <Header nitems={citems.length} />
  <Text> Additional 5% less on prepaid orders </Text>
  <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={["Details",""]} flexArr={[1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={["name","email","mobile","address1","address2","city","state","country","pin"]} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
             <Col data={[dets.name,dets.email,dets.mobile,dets.add1,dets.add2,dets.city,dets.stat,dets.country,dets.pin]} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
{citems.map((item,ind)=>(
      <View style={{flex:1,flexDirection:"row"}}>
          <Text style={styles.text} >
        < Citem data={item} /> </Text>   </View>  
))}
<View style={{flexDirection:"row"}}>
<But url={payl} child={"PAY NOW"} >PAY NOW</But>
        <Text  style={styles.text}>TOTAL AMOUNT </Text>
                  <Text><FontAwesome5  name="rupee-sign" size={15}  ></FontAwesome5> {tamt}</Text></View>
      </View>
    </View>   
  )}

 export default Totalamt
const styles = StyleSheet.create({
  container: { flex: 1, padding: 2, paddingTop: 10, width:400, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center',
    fontWeight:600,
    fontSize:14,
   }
})
        
  
   
   