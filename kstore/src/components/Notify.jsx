import { useEffect } from "react"
import axios from "axios"
function Notify(props){
   const  handleP= async()=>{

      const res=await axios.post('https://app.nativenotify.com/api/notification',{ appId: 30426,
      appToken: '7SLiUwHUY8HBu5TBQj35QG',
      title: "Hare Krishna Deepti! Order Recieved",
      body: props.name,
      dateSent:Date.now()})
   }
useEffect(()=>{
  alert(props.name)
  props.name?handleP():console.log('')
},[])
   return(
<>
</>)}

export default Notify