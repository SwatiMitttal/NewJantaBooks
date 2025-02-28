import {  useState } from "react"
import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"
import {prods1} from '../assets/prods1'


function Mdrop(props){
  
  const [cat,setCat]=useState("toys")
  const brands=['tommyH','probot']
  const  [citems,setCitems]=useState([])
  async function handleC(){
  
      setCitems(prods1.filter(item=>item.cat===cat))
      localStorage.setItem('sitems',citems)}
 return(
     <>
  <div id="dropdown" className="">
  <button id="dropbtn"> {props.icon==='FaBars'?<div className="inline-flex ">
  
    <Link to='/home1'><h4 className='font-bold text-sm hover:scale-105 gap-1 text-amber-700 mr-6'
       onClick={()=>{localStorage.setItem("scat","toys");handleC()}}
    >TOYS</h4></Link>
      <Link to='/home1'><h4 className='font-bold text-sm hover:scale-105 gap-2 text-red-950 mr-6'
       onClick={()=>{localStorage.setItem("scat","stationary");handleC()}}
    >STATIONARY</h4></Link>
     <Link to='/home1'> <h4 className='font-bold text-sm hover:scale-105 gap-2 text-amber-600 mr-6'
      onClick={()=>{localStorage.setItem("scat","bags");handleC()}}>BAGS</h4></Link>
  
  <Link  to='/home1' >  <h4 className='font-bold text-sm hover:scale-105 gap-2 text-amber-900 mr-6'
      onClick={()=>{localStorage.setItem("scat","bottlesm");handleC()}}
    
    >BOTTLES</h4></Link>
  
  </div>:<FaSearch/>}</button>
  <div id="dc">
  {props.icon==='FaBars'? 
             <></> 
       :
       <>
        <div className="h-8 w-45 block bg-amber-200 text-sm 
             font-semibold border-2  border-amber-600   rounded-md p-2  flex-wrap
           justify-center items-center   hover:scale-125"  
           onClick={()=>{localStorage.setItem("scat","tommy");handleC()}} >{brands[0]}</div>

<div className="h-8 w-45 block bg-amber-200 text-sm 
             font-semibold border-2  border-amber-600   rounded-md p-2  flex-wrap
           justify-center items-center   hover:scale-125"  
           onClick={()=>{localStorage.setItem("scat","probot");handleC()} }>{brands[1]}</div>
       
       </>

 }
  </div>
</div>
<br></br><br></br>



</>
)}

export default Mdrop