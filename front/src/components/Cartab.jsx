

import {  useSelector } from "react-redux"
import Citem from "./Citem"
import { Link } from "react-router-dom"

function Cartab(){
  const cart=useSelector(store=>store.cart.items)
  const cuser=useSelector(store=>store.users.user.email)
return (
        <>
        <div  className= 'fixed right-0 top-0 bg-slate-900 text-white pt-6 font-semibold grid grid-rows-[60px_1fr_60px]  lg:w-60 md:w-30 sm:w-30 h-full gap-3 tranform  translate-x-10 transition-transform duration-300 '>
            <h2   className="text-white  font-semibold p-4 text-2xl">SHOPPING CART</h2>
            <div>
            {cart.map((item,i)=>(
                <>
               <Citem data={item}  />
               </> 
            ))}

            </div>

            <div className="grid grid-cols-2">
             <Link  to={cuser?'/totamt':'/login'} >  <button className="text-white m-5 text-xl bg-amber-700  hover:bg-amber-900 rounded-md w-28 p-1"
                 type='button'
                >CHECKOUT</button>  </Link> 
               
            </div>

        </div>
        </>
    )
}

export default Cartab