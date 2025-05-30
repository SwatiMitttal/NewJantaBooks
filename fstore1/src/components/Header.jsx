import { View,Text  ,Image,StyleSheet ,ImageBackground  }    from   "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from "expo-router"
function Header({nitems}){
    const nav=useNavigation()
    return(<>
  
      <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",margin:10 ,maxHeight:80}}>
      <ImageBackground  source={require('../../assets/rang/sidedes.jpg')}>
        <View style={{flexDirection:"row"}}>
     
       <Text style={styles.title}>Rang & Kesar </Text>
       </View>

      <View style={{flex:1,flexDirection:"row",marginLeft:200 ,borderRadius:10}}>
     
    
     <Image  style={styles.img1} source={require('../../assets/roli.png')}  ></Image>
     
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
        
        marginLeft:20,

      },
      img:{
        height:110,
        width:110,
        borderRadius:10,
        marginLeft:2
      },
      img1:{
         height:50,
         width:50,
         borderRadius:10,
         marginLeft:30
      },
      ccart:{
        backgroundColor:"white",
        height:50,
        borderRadius:60,
         width:30,
        justifyContent:"center",
        
    }
})

/*
      onStartShouldSetResponder={true}
          // onResponderGrant={nav.navigate('Account')}     */