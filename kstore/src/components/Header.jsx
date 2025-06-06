import { View,Text  ,Image,StyleSheet ,ImageBackground  }    from   "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from "expo-router"
function Header({nitems}){
    const nav=useNavigation()
    return(<>
  
      <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",margin:10 ,maxHeight:100}}>
      <ImageBackground  source={require('../../assets/rang/sidedes.jpg')}>
        <View style={{flexDirection:"row"}}>
     
       <Text style={styles.title}>Rang & Kesar </Text>
       </View>
    <View style={{flex:1,flexDirection:"column",marginLeft:200 ,borderRadius:10}}>
    <Image  style={styles.img1} source={require('../../assets/roli.png')}  ></Image>
    <Text style={{fontWeight:600}}>Click bottom tab cart icon to view</Text>
     </View>
    <View 
        style={styles.ccart}><Text style={{fontWeight:800,fontSize:14,color:"red"}}>{nitems}</Text><Entypo name={"shopping-cart"}  
          size={25} color={"darkgoldenrod"}></Entypo>  </View>
         </ImageBackground> 
      </View>
     
    </>)
}

export default Header
const styles=StyleSheet.create({
    title:{
        fontWeight:600,
        fontSize:16,
        marginLeft:20},
      img:{
        height:50,
        width:110,
        borderRadius:10,
        marginLeft:2
      },
      img1:{
         height:50,
         width:50,
         borderRadius:10,
         marginLeft:50
      },
      ccart:{
        backgroundColor:"white",
        height:50,
        borderRadius:60,
         width:30,
        justifyContent:"center",
        position:"absolute",
        marginLeft:200,
        marginTop:20
        
    }
})

/*
      onStartShouldSetResponder={true}
          // onResponderGrant={nav.navigate('Account')}     */