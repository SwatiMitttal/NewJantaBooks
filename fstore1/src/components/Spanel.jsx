import {View,StyleSheet,Image,Text} from 'react-native'

function Spanel(){

    return(
   <View style={styles.cont2}>
     <View style={styles.cont1}>
        <Image  style={styles.img} source={require('../../assets/lprice.jpg')}  ></Image>
        <Text style={styles.txt1}> Pure Fabrics</Text>
     </View>

     <View style={styles.cont1}>
      
        <Image  style={styles.img} source={require('../../assets/squality.png')}  ></Image>
        <Text style={styles.txt1}>Superior Quality</Text>
     </View>

     <View style={styles.cont1}>
        <Image  style={styles.img} source={require('../../assets/nday.jpg')}  ></Image>
        <Text style={styles.txt1}>4-5 Days Dispatch</Text>
     </View></View>

   )
}

export default Spanel

const styles=StyleSheet.create({
    cont2:{
        flex:1,
      flexDirection:"row",
      },
    cont1:{
       flexDirection:"column",
       marginTop:10,
       marginLeft:10
     },
    img:{
        height:74,
        width:74,
        borderRadius:50,
    },
    img1:{
        height:30,
        width:50
    },
    txt1:{
        fontWeight:600,
        color:"darkgoldenrod"
    },
    txt2:{
      fontWeight:700,
       fontSize:12, 
       
    },
    cont3:{
        justifyContent:"center",
        flexDirection:"row",
        borderWidth:2,
        borderRadius:12,
        width:200,
        height:40,
        padding:2,
        marginTop:25,
        alignItems:"center"
    }
})

