     import Layout1 from "./Layout1"
     import Pcart from "./Pcart"
     import { useEffect,useState } from "react"
     import axios from "axios"
     
    
function Home1(){
    const  [citems,setCitems]=useState([])
        const [cat,setCat]=useState(localStorage.getItem('scat'))
       const [aitems,setAitems]=useState([])
 
 useEffect(()=>{
  setAitems(citems.filter(item=>item.cat===cat))
},[citems,cat])
     useEffect(()=>{
      try{
        axios.get(`${url}/items`).then(
          res=>{if(res.status===200){
            setCitems(res.data)
                    }})
      }catch(err){
        console.log(err.message)
      }},[])
     return(
     <div>
     <br></br>
     <hbutton  className='text-2xl border-2 bg-amber-200 rounded-lg p-1' 
     >{localStorage.getItem('scat')}</hbutton>
     
     <p className="text-sm font-semibold text-amber-600">Total {aitems.length} items</p>
     <Layout1/>
     <h3  className='text-md text-green-950 justify-center text-2xl items-center font-weight-600'>ITEMS</h3>
           <div  className='flex justify-center items-center '  >
           <div  className='grid  lg:grid-cols-2  md:grid-cols-2  sm:grid-cols-1 gap-6'  >
           {aitems && aitems.map((item,ind)=>(
              <div>
             <Pcart  data={item} key={ind}/>
               </div>
        ))};
        </div></div>
     
        </div>
     
     
          ) }
     
          export default  Home1
