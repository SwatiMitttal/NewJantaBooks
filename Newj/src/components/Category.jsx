
import { StyleSheet ,Text,  TouchableOpacity} from "react-native"


function Category({item,scat,setScat}){
   
 return(<>
   
    <TouchableOpacity onPress={()=>setScat(item)}>
       <Text style={[styles.text1,scat===item && 
        {color:"white",backgroundColor:"cadetblue"}
       ]}>{item}</Text>
    </TouchableOpacity>
    </>)
}
export default Category
const styles=StyleSheet.create({
   text1:{
    backgroundColor:"aliceblue",
     height:40,
      width:100,
      borderRadius:8,
      padding:3,
      textAlign:"center",
      borderWidth:2,
      borderColor:"darkcyan",
      fontSize:13,
      fontWeight:600,
      marginLeft:10,
      marginTop:5
   }
})