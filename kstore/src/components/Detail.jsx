import {View,Text,StyleSheet,Image}  from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Header from './Header'
import { addItem } from '@/store/Cart'
function Detail({route}){
const dispatch=useDispatch()
  const item=route.params.item
  const [f,setF]=useState(false)
  const nitems=useSelector(store=>store.cart.items.length)
   async function handleA(){
        setF(true)
        dispatch(addItem({
              id:item._id,
              quantity:1,
              price:item.price,
              imgurl:item.imgurl,
              note:item.note,
              cbot:item.cbot,
              rating:item.rating,
              slug:item.slug,
              disc:item.disc
          })) }
         
    return(
        <View>
        <Header nitems={nitems} />
       
         <View style={styles.container} >
                    <Text style={{fontWeight:600,color:"black"}}>{item.slug}</Text>
                       <Text style={styles.note}>
                        <Image style={styles.img} source={{uri:item.imgurl}} onMagicTap={console.log(item._id)} >
                      </Image>
                         <FontAwesome5 name={"rupee-sign"} size={15} color={"darkgoldenrod"}></FontAwesome5>    
                         <Text style={styles.stxt}>{item.price}</Text> <FontAwesome5 name={"rupee-sign"} size={15} color={"black"}></FontAwesome5>  {item.price- (item.disc?item.disc:.2*item.price)}</Text> 
                        
                           <Text   style={styles.txt1}>{item.note}</Text>
                             <Text   style={styles.txt1}>{item.desc}</Text>
                         <View style={f?styles.cont1:styles.cont2}> <Text style={styles.txt1}
                          onPress={handleA } 
                         >Add to Cart</Text>  </View>
                        </View>
        </View>
    )
}

export default Detail

const styles=StyleSheet.create({
  head1:{
      fontWeigth:600,
      fontSize:14,
      color:"darkcyan"
  },
  container:{
     flex:1,
     marginLeft:10,
     marginTop:140
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
     textDecorationLine:"line-through",
     fontWeight:600
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