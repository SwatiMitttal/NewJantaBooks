import { View,Text  ,Image,StyleSheet, TouchableHighlight     }    from   "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from "expo-router"
function Header({nitems}){
    const nav=useNavigation()
    return(<>
      <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",margin:10 ,maxHeight:80}}>
        <View>
      <Image   
       source={require('../../assets/newjanta.jpeg')}
                           style={styles.img}></Image> 
       <Text style={styles.title}>New Janta Books & Stationery </Text>
      </View>
     <View 
        style={styles.ccart}><Text style={{fontWeight:800,fontSize:14,color:"red"}}>{nitems}</Text><Entypo name={"shopping-cart"}  
          size={25} color={"darkcyan"}></Entypo>  </View>
        
      </View>
    </>)
}

export default Header
const styles=StyleSheet.create({
    title:{
        fontWeight:600,
        fontSize:14,
        color:"darkcyan"
      },
      img:{
        height:50,
        width:50,
        borderRadius:10
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