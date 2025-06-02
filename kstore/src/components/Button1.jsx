
import { TouchableOpacity,Text,StyleSheet ,View} from "react-native"
function Button1(props){

    
   return(
    <TouchableOpacity style={styles.cont} onPress={props.onPress}>
     <View style={{backgroundColor:"darkgoldenrod",borderRadius:10,borderWidth:2,padding:3}}>
      <Text style={styles.text}>{props.text}</Text></View>
    </TouchableOpacity>
   )
}

export default Button1
const styles=StyleSheet.create({
    cont:{
        backgroundColor:"darkgoldnrod",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:90
      },
      text:{
        fontWeight:600,
        color:"black"
      }
})