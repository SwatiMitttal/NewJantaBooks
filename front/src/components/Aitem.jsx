import { FaGifts,FaList,FaEdit } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useState } from "react"
import List from "./List"
import { toast } from "react-toastify"
import Ritemm from "./Ritemm"
function Aitem(){
    const [sorder,setSorder]=useState(false)
      const [ritem,setRitem]=useState(false)
      const [aitems,setAitems]=useState([])
      const [email,setEmail]=useState('')

      
  return(<>
  <div className="inline-block">
    <div className='inline-flex justify-items-start'>
    <img  src='../../newjanta.jpeg' className="h-20 w-20 rounded-md" ></img> 
       <h3 className="font-semibold text-amber-800 justify-center items-center">ADMIN PANEL</h3>
        <hr></hr>

     <div className="grid grid-cols-1 w-110 border-1 border-gray-300 ">
              <div  className="h-10 w-80 inline-flex justify-center items-center 
                       mt-5 font-semibold border-2 border-gray-200 hover:scale-105 hover:bg-slate-100 "  >
                          <FaGifts className="h-8 w-8 mr-4" /> Orders</div>  
        <div className="inline-block ">
          <label className="text-sm">pls enter email</label>
          <input  type="email" className="border-2 border-slate-400 text-sm
          w-80 hover:bg-slate-100" placeholder="emter email" onChange={e=>setEmail(e.target.value)}></input>
       <button className="bg-black text-sm text-white p-2 rounded-md
           mt-3 hover:scale-105"  onClick={e=>setSorder(true)}>Get Orders</button>
        </div>
           <Link  to='/nform' >     <div  className="h-10 w-80 inline-flex justify-center items-center 
                       mt-5 font-semibold border-2 border-gray-200 hover:scale-105 
                        hover:bg-slate-100 "   onClick={e=>setNform(true)} >
                          <FaList className="h-4 w-4 mr-4" /> Add new Item</div></Link> 
                  <div  className="h-10 w-80 inline-flex justify-center items-center 
                       mt-5 font-semibold border-2 border-gray-200 hover:scale-105 
                        hover:bg-slate-100 "   onClick={e=>setRitem(true)} >
                          <FaEdit className="h-4 w-4 mr-4" /> Remove Item</div>
    </div>
    </div>    
  {sorder?<div> <List  email={email}/></div>:<></>}
  {ritem?<div> <Ritemm/></div>:<></>}
</div>

    </>)
}

export default Aitem


