import { FaGifts,FaTrash,FaBackward} from 'react-icons/fa'
import './App.css'
import Policy from './components/Policy'
import { useState } from 'react'
import { toast} from 'react-toastify'
import Ruser from './components/Ruser'

function App()  {
  
  const [email,setEmail]=useState(null)
  const [policy,setPolicy]=useState(false)
  
  const [ruser,setRuser]=useState(false)
 
const [img,setImg]=useState()
const light="text-sm bg-amber-300 border-2 border-amber-600 p-1 font-medium hover:scale-105"
const dark="text-sm bg-amber-500 border-2 border-amber-600 p-1 font-medium hover:scale-105"

 function handleK(){
     
     setPolicy(false)
     setRuser(true)
  }

  function handleC(){
    setPolicy(false)
    setRuser(false)
  }
  
  return (
    <>
    <div>
   <div className='inline-flex justify-items-start'>
    <img  src='../../logo.png' className="h-10 w-10" ></img>  
     <h3 className='font-semibold'>Admin Panel</h3>
    </div>
    <hr></hr>
    {!ruser && !policy?
<div className="inline-flex">
    <div className="grid grid-cols-2 w-110 border-1 border-gray-300 ">
      <div  className="h-10 w-40 inline-flex justify-center items-center 
               mt-5 font-semibold border-2 border-gray-200 hover:scale-105
                hover:bg-amber-100 "  onClick={e=>setPolicy(true)} >
                  <FaGifts className="h-8 w-8 mr-4" /> Private Policy</div>  
        
          <div  className="h-10 w-50 inline-flex justify-center items-center 
               mt-5 font-semibold border-2 border-gray-200 hover:scale-105 
                hover:bg-amber-100 "   onClick={e=>setRuser(true)} >
                  <FaTrash className="h-4 w-4 mr-4" /> Delete User Account</div>
        <div className="inline-block ">
          <label className="text-sm"> Enter Email</label>
          <input  type="email" className="border-2 border-gray-200 text-sm
          w-80 hover:bg-slate-100" placeholder="emter email" onChange={e=>setEmail(e.target.value)}  onClick={e=>e.keyPress==='enter'?handleK:""}></input>
         
    </div>
    </div> 
  </div>
     :<><FaBackward  onClick={handleC}  /></>}
  
    {policy?<div> <Policy/> </div>:<></>}
     {ruser && email ?<div> <Ruser email={email} /> </div>:<></>}
   
   
   </div> 
    </>
  )
}

export default App
