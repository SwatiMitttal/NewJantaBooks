import { useState ,useEffect} from "react"
//import { useParams } from "react-router-dom"
import {View,StyleSheet,Text,Image,Button}  from  'react-native'
import {addItem,changeQ} from '../../store/Cart'
import { useDispatch } from "react-redux"
import Header from "./Header"
import { FontAwesome5 } from "@expo/vector-icons"
import axios from 'axios'
function Detail(){
     
    
    const [items,setItems]=useState([])
    const [item,setItem]=useState({})
    const [q,setQ]=useState(1)
    const dispatch=useDispatch()
  async function fitem(){
    const res=await axios.get('https://newjvite3.onrender.com/items')
    if(res.status===200){
        setItems(res.data)
    // const a=JSON.parse(aitems)
     const fdetail=items.filter(item=>item.slug==='brown-coord')
     setItem(fdetail[0])}}

    useEffect(()=>{
     fitem ()
    },[])

    const handleA=()=>{
        dispatch(addItem({id:item._id,
         quantity:1,
         price:item.price,
         imgurl:item.imgurl,
         note:item.note,
         cbot:item.cbot,
         rating:item.rating,
         slug:item.slug,
         disc:item.disc}))
    }
   
     const handleAdd=()=>{
              dispatch(changeQ({id:item._id,quantity:(q+1),price:item.price,imgurl:item.imgurl}))
              setQ(q+1) }
      const handleRem=()=>{
         dispatch(changeQ({id:item._id,quantity:q-1,price:item.price}))
             setQ(q-1<1 ? 1:q-1)}
return(
      <View>
     <Header  />
          <View style={styles.container}>
                       <Text style={styles.title}>{item.slug}</Text> 
                        <Text style={styles.note}>
                       <FontAwesome5 name={"rupee-sign"} size={15} color={"darkcyan"}></FontAwesome5>    
                       <Text style={styles.stxt}>{item.price}</Text> {item.price- (item.disc?item.disc:.2*item.price)}</Text> 
                       <View style={styles.cont1}> <Text style={styles.txt1}
                        
                       >Add to Cart</Text></View>
                       <Image  style={styles.img} source={{uri:"https://res.cloudinary.com/dsttk9lau/image/upload/v1743698191/stumb2_wxse9d.jpg"}}></Image>
            </View>
                 
            <Button  title='-' onClick={e=>handleRem(e)} ></Button>
    </View>     
    )
}

export default  Detail

const styles=StyleSheet.create({
   head1:{
       fontWeigth:600,
       fontSize:14,
       color:"darkcyan"
   },
   container:{
      flex:1,
   },
   cont1:{
       backgroundColor:"darkcyan",
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
      height:280,
      width:170,
      borderRadius:14,
      marginVertical:10,
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