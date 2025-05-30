
import { View,StyleSheet,Text,Button,TextInput ,ImageBackground,FlatList,Image,URL,ScrollView} from "react-native"     

import Header  from '../components/Header'
import { useEffect, useState} from "react"
import Category from '../components/Category'
import Pcart from '../components/Pcart'
import { useDispatch, useSelector } from "react-redux"


import axios from 'axios'
function Homesc({navigation}){
  const dispatch=useDispatch()
  
  const [aitems,setAitems]=useState([])
  const cat=['Most Popular','rakhis','bags','bottles','stationery','books','pool-summer-accessories']
  const [scat,setScat]=useState(null)
  const [citems,setCitems]=useState([])
  const nitems=useSelector(store=>store.cart.items.length)
   const fprods=async()=>{
     const res=await axios.get('https://newjvite3.onrender.com/items')
             if(res.status===200){
               const items=res.data
              setAitems(res.data)
                if(scat){
                   for(let i=0;i<items.length;i++){
                         if(items[i].cat===scat){
                              citems.push(items[i])
                         } }
                    setAitems(citems)}}}
useEffect(()=>{
    fprods()
  },[scat])

 return(<>
  <ScrollView>
   <View style={{backgroundColor:"white"}}>
  
     <View style={{flexDirection:"row"}}>
           {aitems &&  <FlatList 
           ListHeaderComponent={<View style={{flex:1,flexDirection:"column"}}>
           
               <Header nitems={nitems}/> 
               <View style={{height:50}}>  </View>
               <FlatList 
                onPress={e=>{setScat(item);handleP(e)}}
                 data={cat} renderItem={({item})=><Category item={item} scat={scat} 
                setScat={setScat}/>} 
                horizontal={true}
                keyExtractor={(item)=>item}
                 showsHorizontalScrollIndicator={false}/>
                
               <Text style={{fontWeight:600}}>{citems.length} items</Text>
              
                  </View>}
            numColumns={2}
                data={aitems}
                
                renderItem={({item})=><Pcart  navigation={navigation} item={item}  />  }
                keyExtractor={(item)=>item}
                 showsVerticalScrollIndicator={false}
            />}
             </View>
            
        </View>
     </ScrollView>
    </>)}
export default Homesc
const styles=StyleSheet.create({
cont1:{justifyContent: "start",
            alignItems: "center",
           },
   cont:{
      flexDirection:"row",
      backgroundColor:"white",
      height:40,
      borderRadius:10,
      marginBlockStart:20
     },
    tinput:{
      padding:2,
      fontSize:16,
     },
     img:{
      height:250,
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
   },})

/*
>*/
