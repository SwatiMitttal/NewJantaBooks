import { useSelector } from "react-redux"
import Citem from "./Citem"
import {View,StyleSheet,Text,Linking,ImageBackground,ToastAndroid,Button} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import axios from "axios"

import { useCallback, useEffect } from "react"
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import Header from "./Header"

function Totamt({}){
const payl='https://razorpay.me/@rangkesar'
const citems=useSelector(store=>store.cart.items)
const tamt=useSelector(store=>store.cart.totamt)
const dets=useSelector(store=>store.users.user)
const handleC=async()=>{
  try{
const res=await axios.post('https://newjvite2.onrender.com/orders',{email:dets.email,items:citems,tamt:tamt})
     if(res.status===200){
      ToastAndroid.show('order confirmed')
     }}
   catch(err){
  console.log(err)}}
const addu=async()=>{
    const res=await axios.post('https://newjvite2.onrender.com/signup',dets)
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
<ImageBackground source={require('../../assets/rang/sidedes.jpg')}>
<View style={{flex:1,flexDirection:"column",justifyContent:"space-between"}}>
  <View style={styles.container}>
     <Table borderStyle={{borderWidth: 0}}>
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
        <Text  style={styles.text}>Total Amount </Text>
                  <Text><FontAwesome5  name="rupee-sign" size={10}  ></FontAwesome5> {tamt}</Text></View>
      </View>
</View>  
</ImageBackground> 
  )}

 export default Totamt
const styles = StyleSheet.create({
  container: { flex: 1, padding: 1, paddingTop: 4, width:400, backgroundColor: 'burlywood' },
  head: {  height: 25,  backgroundColor: 'burlywood'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: 'burlywood' },
  row: {  height: 16  },
  text: { textAlign: 'center',
    fontWeight:600,
    fontSize:12,
   }
})
        
 /* */ 
   
   