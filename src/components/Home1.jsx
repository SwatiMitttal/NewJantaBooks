import Layout1 from "./Layout1"
import Pcart from "./Pcart"
import { prods1 } from "../assets/prods1"
import { useEffect } from "react"

import {  useState } from "react"
function Home1(){
    
    const  [citems,setCitems]=useState([localStorage.getItem('sitems')])
    const [cat,setCat]=useState(localStorage.getItem('scat'))
 useEffect(()=>{
    setCat(localStorage.getItem('scat'))
   setCitems(prods1.filter(item=>item.cat==cat))
    
 },[citems])
  
return(
<div>
<br></br>
<hbutton  className='text-2xl border-2 bg-amber-200 rounded-lg p-1' 
>{localStorage.getItem('scat')}</hbutton>

<p className="text-sm font-semibold text-amber-600">Total {citems.length} items</p>
<Layout1/>

     <h3  className='text-md text-green-950 justify-center text-2xl items-center font-weight-600'></h3>
      <div  className='flex justify-center items-center '  >
      <div  className='grid  lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2 gap-6'  >
       {citems.map((item,ind)=>(
          <div>
        <Pcart  data={item} key={ind}/>
            </div>
       ))}
   </div></div>

   </div>


     ) }

     export default  Home1
