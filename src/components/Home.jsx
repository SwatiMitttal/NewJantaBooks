import {useEffect,useState} from 'react'

  import Layout1 from './Layout1'
  import Pcart from './Pcart'
  import { prods1 } from '../assets/prods1'
  import  axios from 'axios'
  import Iconn from './Iconn'
import { useSelector } from 'react-redux'
function  Home(props){
  const [aitems,setAitems]=useState()
  const ccount=useSelector(store=>store.cart.items)
  useEffect(()=>{
     async function getItems(){
       try{
           await axios.get('http://localhost:4001/items').then(
            res=> res.json()).then(
              data=>{alert(data.length)
                setAitems(data)
              }
            )}catch(err){
        console.log(err.message)
      }}},[aitems,ccount])
   
    return(
        <>
          <Layout1/>
        <h3 key='h1' className='text-md text-green-950 justify-center text-2xl items-center font-weight-600'></h3>
        <div key='d2' className='flex justify-center items-center '  >
        <div key='d3' className='grid  lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2 gap-6'  >
      {prods1.map((item,ind)=>(
              <div>
             <Pcart  data={item} key={ind}/>
               </div>
        ))};
     </div></div>
     <Iconn/>
      
        </>
    )
}

export default Home