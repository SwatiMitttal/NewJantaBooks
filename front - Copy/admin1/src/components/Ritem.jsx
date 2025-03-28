import { useEffect, useState } from "react"
import { toast } from "react-toastify"

function Ritem(){
    const [aitems,setAitems]=useState([])
   async function fitems(){
    toast('hello')
     const res=await fetch('https://newjvite3.onrender.com/items')
     if (res.data){
        setAitems(res.data)
        toast('pls select items to be removed')
     }}
   useEffect(()=>{
     fitems()
   },[])

return(<>
   <h3>ritem</h3>
    <div className="grid grid-cols-6">
      {aitems && aitems.map((item,i)=>{
            <input type='checkbox'></input>
      })}

    </div>

</>)

}
export default Ritem