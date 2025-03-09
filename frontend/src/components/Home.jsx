import {useEffect,useState} from 'react'
import { prods1 } from '../assets/prods1'
  import Layout1 from './Layout1'
  import Pcart from './Pcart'
   import  axios from 'axios'
  import Iconn from './Iconn'
  
function  Home({url}){
  const [aitems,setAitems]=useState([])
  const citems=prods1
 useEffect(()=>{
     try{
            axios.get(`${url}/items`).then(
            res=> {if (res.status===200){
                  setAitems(res.data) }})}
          catch(err){
        console.log(err.message)
      }
      console.log(localStorage.getItem('aitems'))
      !aitems.length>0  ?setAitems(prods1):console.log(citems.length)
      !aitems.length>0  ?localStorage.setItem('aitems',prods1):console.log(citems.length)
     },[])
return(
      <>{ 
        <>
          <Layout1 />
        <h3 key='h1' className='text-md text-green-950 justify-center text-2xl items-center font-weight-600'></h3>
        <div key='d2' className='flex justify-center items-center '  >
        <div key='d3' className='grid  lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-1 gap-0'  >
      {aitems &&    aitems.map((item,ind)=>(
              <div>
             <Pcart  data={item} key={ind}/>
               </div>
        ))};
     </div></div>
     <Iconn/>
      
        </> } </>
    )
}

export default Home