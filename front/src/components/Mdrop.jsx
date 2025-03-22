import {  useState } from "react"
import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"
import axios from "axios"

function Mdrop(props){
  
  const [cat,setCat]=useState("toys")
  const brands=['tommyH','probot','rakhis']
  const  [citems,setCitems]=useState([])
 
 return(
     <>
  <div id="dropdown" className="">
  <button id="dropbtn"> {props.icon==='FaBars'?<div className="inline-flex ">
  
    <Link to='/home1'><h4 className='font-bold text-sm hover:scale-105 gap-1 text-amber-700 mr-6'
       onClick={()=>{localStorage.setItem("scat","toys")}}
    >TOYS</h4></Link>
      <Link to='/home1'><h4 className='font-bold text-sm hover:scale-105 gap-2 text-red-950 mr-6'
       onClick={()=>{localStorage.setItem("scat","stationary")}}
    >STATIONARY</h4></Link>
     <Link to='/home1'> <h4 className='font-bold text-sm hover:scale-105 gap-2 text-amber-600 mr-6'
      onClick={()=>{localStorage.setItem("scat","bags")}}>BAGS</h4></Link>
  
  <Link  to='/home1' >  <h4 className='font-bold text-sm hover:scale-105 gap-2 text-amber-900 mr-6'
      onClick={()=>{localStorage.setItem("scat","bottlesm")}}
    
    >BOTTLES</h4></Link>
  
  </div>:<FaSearch/>}</button>
  <div id="dc">
  {props.icon==='FaBars'? 
             <></> 
       :
       <>
        <div className="h-8 w-14 block bg-amber-200 text-sm 
             font-semibold border-2  border-amber-600   rounded-md p-2  flex-wrap
           justify-center items-center   hover:scale-105"  
           onClick={()=>{localStorage.setItem("scat","tommy")}} >{brands[0]}</div>

<div className="h-8 w-14 block bg-amber-200 text-sm 
             font-semibold border-2  border-amber-600   rounded-md p-2  flex-wrap
           justify-center items-center   hover:scale-105"  
           onClick={()=>{localStorage.setItem("scat","probot")} }>{brands[1]}</div>
  <div className="h-8 w-14 block bg-amber-200 text-sm 
             font-semibold border-2  border-amber-600   rounded-md p-2  flex-wrap
           justify-center items-center   hover:scale-105"  
           onClick={()=>{localStorage.setItem("scat","rakhis")} }>{brands[2]}</div>
       
       </>

 }
  </div>
</div>
<br></br><br></br>



</>
)}

export default Mdrop