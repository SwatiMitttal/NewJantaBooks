import axios from 'axios'
import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Popup from 'reactjs-popup';
import { FaRupeeSign } from 'react-icons/fa';
function List({url}){
   
    const [orders,setOrders]=useState([])
    const [email,setEmail]=useState(localStorage.getItem('mail'))
    const flist=async ()=>{
        
        const res= await axios.post(`${url}/corders`,{email:email})
            if(res.status===200){
              setOrders(res.data)
             console.log(orders[0])
           }}
    useEffect(()=>{
        alert(email) 
        flist()
     
},[])

    return(<>
      <Navbar/>
 <div  className="inline-flex w-full" >
      <Sidebar  />
      <div  className="w-150 inline-block gap-2">
        <div className='w-150 inline-block gap-2'></div>
      </div>
  </div>
   <p className='text-sm align-center text-center'>Orders</p>
     <hr></hr>
    <p className='text-sm align-center text-center'>{email}</p>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="px-6 py-3">
                      Order Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Item
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Amount
                  </th>
              </tr>
          </thead>
          <tbody>
          {orders.length>0  && orders.map((order,i)=>(
               <>
             {order.citems.map((item,ii)=>(
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <ul>  <li> {ii===0?order._id :''}</li>
                     <li> {ii===0?order.date :''}</li></ul> 
                  </th>
                 
                  <td className="px-6 py-4">
                      {item.slug}
                  </td>
                  <td className="px-6 py-4">
                     <img  className='h-10 w-10' src={item.imgurl} ></img>
                  </td>
                  <td className="px-6 py-4 inline-flex">
                      <FaRupeeSign/>{item.price}
                  </td>
                  <td className="px-6 py-4">
                     {item.quantity}
                  </td>
                  <td className="px-6 py-4 inline-flex">
                 <FaRupeeSign/>    {item.quantity*item.price}
                  </td>
              </tr>))}
              <br></br>
              <tr><td></td><td></td><td></td><td></td><td></td>
                  <td className='ml-5 inline-flex'><FaRupeeSign/>{order.tamt}</td>
              </tr>
              <hr></hr>
           </> ))}
              
          </tbody>
      </table>
  </div>
    </>)
}

export default List