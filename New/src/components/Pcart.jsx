

import {useDispatch,useSelector,}  from 'react-redux'
import {Text,InputText,StyleSheet,View,Image,ToastAndroid} from'react-native'
import { addItem } from '../../store/Cart'
import {  useState, useEffect } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
//import { BaseToast } from 'react-native-toast-message'
import { useNavigation } from 'expo-router'
function Pcart({item}){
  const {_id,note,cat,count,imgurl,rating,price,slug,disc}=item
    const nitems=useSelector(store=>store.cart.items.length)
    const dispatch=useDispatch()
     const nav=useNavigation()
    const [cbot,setCbot]=useState(0)
    const [f,setF]=useState(false)
    const handleS=()=>{
     
     }
    async function handleA(){
      setF(true)
      //ToastAndroid.show('item added',10)
      dispatch(addItem({
            id:_id,
            quantity:1,
            price:price,
            imgurl:imgurl,
            note:note,
            cbot:cbot,
            rating:rating,
            slug:slug,
            disc:disc
        })) }
        useEffect(()=>{
          handleS()
        },[])
        
return(
  
         <View style={styles.container} onPress={e=>handleS(e)}>
           <Text style={{fontWeight:600,color:"darkcyan"}}>{slug}</Text>
           <Text style={styles.note}>
             <FontAwesome5 name={"rupee-sign"} size={15} color={"darkcyan"}></FontAwesome5>    
             <Text style={styles.stxt}>{item.price}</Text> {item.price- (item.disc?item.disc:.2*item.price)}</Text> 
             <View style={f?styles.cont1:styles.cont2}
                
             > <Text style={styles.txt1}
              onPress={e=>handleA(e) } 
             >Add to Cart</Text>  </View>
            <Image style={styles.img} source={{uri:item.imgurl}} 
                >
          </Image>
         
           </View>
  
           )}

export default Pcart
const styles=StyleSheet.create({
  head1:{
      fontWeigth:600,
      fontSize:14,
      color:"darkcyan"
  },
  container:{
     flex:1,
     marginLeft:10,
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
  stxt:{
     textDecorationLine:"line-through"
   },
  img:{
     height:180,
     width:150,
     borderRadius:14,
     marginVertical:10,
     marginLeft:10,
     marginHorizontal:10,
  },
  title:{
      fontWeigth:600,
      fontSize:12,
      color:"darkcyan",
      padding:5,
  },
  txt1:{
      fontWeight:600 },
  
  })