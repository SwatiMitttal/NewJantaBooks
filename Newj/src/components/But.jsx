
import { StyleSheet } from "react-native";
import { useCallback } from "react";
import  Button1 from './Button1'
import { Linking } from "react-native";
function But({url,child}){
   
    const handleP = useCallback ( async () => {
        const sup = await Linking.canOpenURL(url);
        if(sup){
          await Linking.openURL(url)
        }},[])
    return(
       <Button1 text={child} onPress={handleP} />)
}

export default But

const styles=StyleSheet.create({
    but1:{
        backgroundColor:"darkcyan" ,
        borderRadius:10
    }
})