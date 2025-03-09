
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { FaUser,FaShoppingCart } from "react-icons/fa"
import Mdrop from "./Mdrop"


function Header(){
    const cart=useSelector(store=>store.cart.items)
    const cuser=useSelector(store=>store.users.user.email)
    const handleCart=()=>{}
return (
        <>
     <div className=" bg-white">
  <span id='p1' className="text-amber-800  text-md font-semibold bg-white rounded-l" >bags  <span className=" text-amber-600"> toys 
    </span>  <span className="text-yellow-700">   stationary exclusive   </span></span>
  </div><br></br>  
           
    <div className='container bg-white w-800 px-2 py-2 mr-10'>
  <div className='flex justify-between items-center '>
        <img   src='../../NewJanta.jpeg' alt='logo' className="h-25 w-20 hover:bg-slate-200 rounded-2xl border-red-500 border-2"></img>
   
    <Link  to='/'>  <h4 className='font-semibold text-amber-800 text-ml hover:scale-105'>HOME</h4></Link>
   <Mdrop   icon ='FaBars'  cat=''/>  
      <Mdrop   icon ='FaSearch'  cat=''/>      
     

<div  className="flex justify-center items-center mr-20"  >
  <div  className='flex justify-center relative' onClick={handleCart} >
  
  
   <Link to ={cuser?'/totamt':'/login' }>
   <FaShoppingCart  className="h-9 w-9 fill-amber-700 hover:scale-110" /></Link>
    <span   className='flex h-6 w-6 rounded-full absolute top-2/3 right-1/2 bg-red-500 justify-center 
    text-sm text-white items-center '>{cart.length}</span>
    </div>
    <div  className='flex justify-center relative  gap-1' onClick={cuser?<></> :<Link to='/login'></Link>} >
 
     <Link  to={!cuser?'/login':''} >    <FaUser  className="h-10 w-10 bg-white rounded-full p-2 hover:scale-125" /></Link>   </div>

 <a href='http://localhost:3000'>
 <button className="bg-black text-sm text-white p-2 
 rounded-md justify-right hover:scale-105">Admin Panel</button></a>
 
  </div>    
  </div>
  </div>
     <div  id='brands' className="inline-flex" >
     <img    src='../../brands/cross_logo.png'
      className="h-20 w-20 rounded-md  border-2  border-amber-700 hover:scale-110"  alt='cross'
      onClick={()=>{localStorage.setItem("scat","cross")}}
      ></img>
     <img    src='../../brands/hamster.png'
      className="h-20 w-20 rounded-md  border-2  border-amber-700 hover:scale-110 "  alt='cross'
      onClick={()=>{localStorage.setItem("scat","hamster")}}
      ></img>
     <img    src='../../brands/probot.jpg' 
     className="h-20 w-20 rounded-md  border-2  border-amber-700 hover:scale-110" 
      alt='probot'
      ></img>
     </div>
</>
    )}

export default Header