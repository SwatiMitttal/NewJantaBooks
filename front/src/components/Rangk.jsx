import {useEffect,useState} from 'react'
  import Pcart from './Pcart'
   import  axios from 'axios'
   import { toast } from 'react-toastify'
function Rangk(){
        const [aitems,setAitems]=useState([])
        async function fitems(){ 
           toast('loading ....pls wait')
          try{
          const res= await axios.post('https://newjvite2.onrender.com/items',{cat:'cords'})
          if (res.status===200){
             setAitems(res.data)
            }}catch(err){
      console.log(err.message)
      }}
      useEffect(()=>{
           fitems()
           },[])
     return(
        <div className="inline-flex">
        <div className="h-100 w-100 bg-[url('../../rangk/yghoomr.png)] ">
         <img className=" rotate-15 animate-[bounce_10s_infinite]   h-50  w-50" src="../../rangk/pp1.png" />
             <br></br><br></br>
           <img class=" -rotate-25 h-50 w-50 animate-[bounce_20s_linear_infinite] " src="../../rangk/pp2.png" />
        </div>
    <div>
     <h4 className='font-semibold'>Ethnic Wear</h4>
       <div  className='flex justify-center items-center '  >
           <div  className='grid  lg:grid-cols-2  md:grid-cols-2  sm:grid-cols-1 gap-6'  >
           {aitems &&  aitems.map((item,ind)=>(
              <div>
             <Pcart  data={item} key={ind}/>
               </div>
        ))};
        </div></div>
    </div>
</div>)
}
export default Rangk