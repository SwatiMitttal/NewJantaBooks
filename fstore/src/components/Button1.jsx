
import { TouchableOpacity,Text,StyleSheet } from "react-native"
function Button1(props){

    
   return(
    <TouchableOpacity style={styles.cont} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
   )
}

export default Button1
const styles=StyleSheet.create({
    cont:{
        backgroundColor:"darkcyan",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:60
      },
      text:{
        fontWeight:600,
        color:"white"
      }
})