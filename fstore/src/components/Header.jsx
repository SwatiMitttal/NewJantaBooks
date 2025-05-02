import { View,Text  ,Image,StyleSheet  }    from   "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from "expo-router"
function Header({nitems}){
    const nav=useNavigation()
    return(<>
  
      <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",margin:5 ,maxHeight:80}}>
     
        <View style={{flexDirection:"row"}}>
        <Image  style={styles.img1} source={require('../../assets/newj/public/newjanta.jpeg')}  ></Image>
       <Text style={styles.title}>New Janta Books & Stationery </Text>
       </View>
 <View style={{flex:1,flexDirection:"row",marginLeft:200 ,borderRadius:10}}>
      <Image  style={styles.img1} source={require('../../assets/newj/toys/santa.jpeg')}  ></Image>
      <Image  style={styles.img1} source={require('../../assets/newj/public/brands/cross_logo.png')}  ></Image>
      </View>
    <View 
        style={styles.ccart}><Text style={{fontWeight:700,fontSize:16,color:"red"}}>{nitems}</Text><Entypo name={"shopping-cart"}  
          size={25} color={"darkcyan"}></Entypo>  </View>
        
      </View>
     
    </>)
}

export default Header
const styles=StyleSheet.create({
    title:{
        fontWeight:600,
        fontSize:16,
        color:"darkgoldenred",
        marginLeft:20
      },
      img:{
        height:110,
        width:110,
        borderRadius:10,
        marginLeft:2
      },
      img1:{
         height:80,
         width:80,
         borderRadius:10
      },
      ccart:{
        backgroundColor:"white",
        height:50,
        borderRadius:60,
         width:30,
        justifyContent:"center",
        position:'absolute',
        marginLeft:310
        
    }
})



  /* <ImageBackground  source={require('../../assets/newj/public/brands/probot.jpg')}>*/