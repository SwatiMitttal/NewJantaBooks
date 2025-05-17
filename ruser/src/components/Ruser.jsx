import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
function  Ruser(props){
    
const [flag,setFlag]=useState(false)
    const handleD=async()=>{

        const res=await axios.post('https://newjvite3.onrender.com/ruser',{email:props.email})
        if(res.status===200){
            toast('account deleeted successfully')
            setFlag(true)
        }else{
            toast('Account does not exist')
        }
    }

    useEffect(()=>{
       handleD()
    },[])

   return(
    <>
    {props.email===''? <p className="text-sm text-red-700"> Account not available</p>:<></>}
    {  flag && props.email?<><p className="text-sm text-red-700 font-semibold"> account   {props.email} deleted   succeessfully</p>  </>:
    <p className="text-sm text-red-700"> deleting account ...{props.email}</p>  }
    </>
   )

}

export default Ruser