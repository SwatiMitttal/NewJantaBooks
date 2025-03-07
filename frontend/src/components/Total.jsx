
import { useSelector } from "react-redux"
import Citem from "./Citem"
import { FaRupeeSign } from "react-icons/fa"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"


function Total(){

const citems=useSelector(store=>store.cart.items)
const tamt=useSelector(store=>store.cart.totamt)
const dets=useSelector(store=>store.users.user)
const aitems=useSelector(store=>store.cart.items)

//Initialize Razorpay client
//const client = razorpay.Client(auth=("YOUR_API_KEY", "YOUR_API_SECRET"))
//const Client=pkg.Client(auth='')
// Create a payment order

const pdata = {

    "amount": tamt*100,
    "currency": "INR",
     "receipt": "order123", 
     "description": "Product purchase"

}

//const payment = client.order.create(data=payment_data)
// Access payment details

//payment['id']  # Payment ID
//payment['amount'] # Amount in paise
//payment['currency']  # Currency code

const handleC=async()=>{
  alert(aitems[0].slug)
  try{
   await axios.post('http://localhost:4001/orders',{email:dets.email,aitems:aitems,tamt:tamt}).then(
    res=>res.data
   )

}catch(err){
  console.log(err)
}

}

    return (
<div><div className=" bg-white">
  <span id='p1' className="text-amber-800  text-sm font-semibold bg-white rounded-l" >
   Additional 5% less on prepaid orders  </span>
  </div><br></br>  

<Link  to='/' > <h2 className="font-semibold text-md text-amber-800 ml-20 hover:font-bold">HOME</h2></Link>
<br></br>
<h3  className="text-amber-800 font-semibold text-md  ">{dets.name} </h3><h3 className="font-semibold ">  ORDER SUMMARY</h3>
    <div className="inline-flex w-[500px]">
  <table className="text-emerald-800 font-semibold text-md text-center ml-500 border-2 border-amber-800 w-600" >
        <tr >
        <td className="border-2 border-amber-800 p-2">Name</td>
        <td className="border-2 border-amber-800 p-2">{dets.name}</td>
        </tr>
         <tr >
        <td className="border-2 border-amber-800 p-2">Email</td>
        <td className="border-2 border-amber-800 p-2">{dets.email}</td>
        </tr>
         <tr >
        <td className="border-2 border-amber-800 p-2">mobile</td>
        <td className="border-2 border-amber-800 p-2">{dets.mobile}</td>
        </tr>

        <tr >
        <td className="border-2 border-amber-800 p-2">Address</td>
        <td className="border-2 border-amber-800 p-2 block">{dets.add1}
        <span>{dets.add2}</span>
        </td>
        </tr>

        <tr >
        <td className="border-2 border-amber-800 p-2">City</td>
        <td className="border-2 border-amber-800 p-2">{dets.city}</td>
        </tr>

        <tr >
        <td className="border-2 border-amber-800 p-2">State</td>
        <td className="border-2 border-amber-800 p-2">{dets.state}</td>
        </tr>

        <tr >
        <td className="border-2 border-amber-800 p-2">Country</td>
        <td className="border-2 border-amber-800 p-2">{dets.country}</td>
        </tr>

        <tr >
        <td className="border-2 border-amber-800 p-2">Pincode</td>
        <td className="border-2 border-amber-800 p-2">{dets.pin}</td>
        </tr>
       </table>

       <div  className="block  p-2 items-center ">
               {citems.map((item,ind)=>(
                          <div className="w-80 h-15 bg-white">
                            
                           < Citem data={item} 
                           className='bg-white  text-green-600'/> </div>
                     ))}
                 <label className="font-semibold text-slate-900 text-md ml-20">TOTAL AMOUNT </label>
                      <h3 className="font-bold  text-xl inline-flex"><FaRupeeSign/> {tamt}</h3>

       <br></br>   
                 
  <Link to ='https://razorpay.me/@rangkesar'>  <button  className='rounded-md bg-amber-600
   hover:bg-amber-900 text-white 
  font-semibold text-md   p-3 ml-8 w-40'
  onClick={handleC}
      >PAY NOW  </button></Link></div>
    </div> 

 </div>
    )
}

export default Total