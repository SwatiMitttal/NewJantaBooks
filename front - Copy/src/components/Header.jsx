
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { FaUser,FaShoppingCart } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

import Mdrop from "./Mdrop"
import { useState } from "react"
function Header(props){
   const [pass,setPass]=useState(false)
   const cart=useSelector(store=>store.cart.items)
    const cuser=useSelector(store=>store.users.user.email)
    const nav=useNavigate()
  const handleCart=()=>{}
return (
        <>
<div className=" bg-white">
  <span id='p1' className="text-amber-800  text-md font-semibold bg-white rounded-l" >  <span className=" text-amber-600"> stationary
    </span>  <span className="text-yellow-700">toys </span></span>
  </div>
  <img class=" h-50 w-50 -rotate-15 animate-[bounce_10s_linear_infinite] " src="../../public/rangk/pp3.png" /> 
           
  <div className='container bg-white w-800 px-2 py-2 mr-10'>
  <div className='flex justify-between items-center '>
    
        <img   src='../../newjanta.jpeg' alt='logo' className="h-25 w-20 hover:bg-slate-200 rounded-2xl border-red-500 border-2"></img>
      <Link to='/rangk' > <div className="h-30 w-30 bg-[url(../../rangk/yghoomr.png)]
         rounded-md border-2 border-amber-500 text-sm 
         font-semibold text-amber-700 hover:scale-105 inline-block">
         Ethnic wear <span>Poshaks</span><span>Thakurji</span></div>  </Link>
    <Link  to='/'>  <h4 className='font-semibold text-amber-800 text-ml hover:scale-105'>HOME</h4></Link>
   <Mdrop   icon ='FaBars'  cat=''/>  
    
   
     <div className="inline-block"><button  className="p-1 bg-black rounded-md text-white hover:scale-105
   text-sm justify-center" onClick={e=>setPass(true)} >Admin</button>
   <input className="border-2 border-amber-500 w-11 rounded-md text-sm" 
   type='text' placeholder="passw" onChange={e=>{e.target.value==='deepti123'?nav('/admin'):nav('')}}></input></div> 

<div  className="flex justify-center items-center mr-5"  >
  <div  className='flex justify-center relative' onClick={handleCart} >
   <Link to ={cuser?'/totamt':'/login' }>
   <FaShoppingCart  className="h-9 w-9 fill-amber-700 hover:scale-110" /></Link>
    <span   className='flex h-6 w-6 rounded-full absolute top-2/3 right-1/2 bg-red-500 justify-center 
    text-sm text-white items-center '>{cart.length}</span>
    </div>
    <div  className='flex justify-center relative  gap-1' onClick={cuser?<></> :<Link to='/login'></Link>} >
     <Link  to={!cuser?'/login':''} >    <FaUser  className="h-10 w-10 bg-white rounded-full p-2 hover:scale-125" /></Link>   </div>
  
  </div>    
  </div>
  </div>
    
</>
    )}

export default Header