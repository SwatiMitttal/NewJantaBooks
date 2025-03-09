
import axios from 'axios'
import { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

import { Link } from 'react-router-dom';
function Order({url}){

    const [orders,setOrders]=useState([])
    const [email,setEmail]=useState('')
    const flist=async ()=>{
        localStorage.setItem('mail',email)
        alert(email)
        const res= await axios.post(`${url}/corders`,{email:email})
            if(res.status===200){
              setOrders(res.data)
             console.log(orders[0])
           }}
   const handleC=()=>{
       flist()
    }
return(<>
     <Navbar/>
 <div  className="inline-flex w-full" >
      <Sidebar  />
      <div  className="w-150 inline-block gap-2">

     <div className='w-150 inline-block gap-2'>
      <p className=" text-sm font-semibold ml-5 ">enter email</p>
        <input  type='text' placeholder="email" className=" text-sm ml-10  rounded-md  text-left  border-emerald-800 
        border-7 border" onChange={(e)=>{setEmail(e.target.value);localStorage.setItem('mail',e.target.value)}}></input>
        <hr className='mb-4 mt-2'></hr>
        <Link to='/list1'><button className='bg-black text-white hover:scale-105 p-2 rounded-md text-sm'>Find Orders</button></Link>
    </div>
  
  </div>
</div>
</>)
}

export default Order