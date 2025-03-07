
import axios from 'axios'
import { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Popup from 'reactjs-popup';
import { FaRupeeSign } from 'react-icons/fa';
function Order({url}){

    const [orders,setOrders]=useState([])
    const [email,setEmail]=useState('')
    const flist=async ()=>{
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
        border-7 border" onChange={(e)=>{setEmail(e.target.value)}}></input>
        <hr className='mb-4 mt-2'></hr>
    </div>
  <Popup  trigger={ <button  className='bg-black text-white text-sm  hover:scale-105
  p-2 rounded-md ml-8' onClick={handleC} >Find Orders</button> } >
   <p className='text-sm align-center text-center'>Orders</p>
   <hr></hr>
  <p className='text-sm align-center text-center'>{email}</p>
    

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Order Id
                </th>
                <th scope="col" class="px-6 py-3">
                    Item
                </th>
                <th scope="col" class="px-6 py-3">
                    Image
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
            </tr>
        </thead>
        <tbody>
        {orders && orders.map((order,i)=>(
             <>
           {order.citems .map((item,ii)=>(
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {ii===0?order._id :''}
                </th>
                <td class="px-6 py-4">
                    {item.slug}
                </td>
                <td class="px-6 py-4">
                   
                </td>
                <td class="px-6 py-4 inline-flex">
                    <FaRupeeSign/>{item.price}
                </td>
                <td class="px-6 py-4">
                   {item.quantity}
                </td>
            </tr>))}
            <br></br>
            <tr>
                <td className='ml-70'>{order.tamt}</td>
            </tr>
            <hr></hr>
         </> ))}
            
        </tbody>
    </table>
</div>



  </Popup>
  
  </div>
</div>
</>)
}

export default Order