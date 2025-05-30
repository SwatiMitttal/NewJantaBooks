import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { FaRupeeSign } from "react-icons/fa"
function Ritemm(){
    const [aitems,setAitems]=useState([])
    const [ritems,setRitems]=useState([])
    const [check,setCheck]=useState(false)
    async function fitems(){ try{
        const res= await axios.get('https://newjvite3.onrender.com/items')
        if (res.status===200){
           setAitems(res.data)
           
             toast(`${res.data.length} items`)
           
          }}catch(err){
    console.log(err.message)
    }}
       
    const handleR=(id,slug)=>{
        toast(slug)
        const r=ritems.find(i=>i===id)
     
       !r?setRitems(ritems=>([...ritems,id])):console.log('')
     
    }
const handleRem= async ()=>{
      try{
      toast(`deleting ...${ritems.length} items`)
      const res=await axios.post('https://newjvite3.onrender.com/ritems',{ritems:ritems})
         if (res.status===200){
          toast('selected item deleted successfully')
          //fitems()
         }}catch(e){
          console.log(e.message)
         }
    }

    const handleR1=()=>{
        try{
            alert(ritems)
            const t=[]
             for (i=0;i<ritems.length;i++){
                    t[i]=aitems.find(item=>item.id===ritems[i])}
                   setRitems([])
            toast(t)
        }catch(e){
            console.log(e.message)
        }
    }
    useEffect(()=>{
      fitems()
    },[])
    return(<>
    <div className="inline-block">
    <h4 className="text-sm font-semibold text-amber-900">Select items to be deleted</h4>

    <h3 key='h1' className='text-md text-green-950 justify-center text-2xl items-center font-weight-600'></h3>
        <div key='d2' className='flex justify-center items-center '  >
        <div key='d3' className='grid  lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-1 gap-0'  >
    <div className='inline-block'>
      
        <button className="bg-black w-20 hover:scale-105 
        rounded-md text-white p-1"  onClick={e=>handleRem(e)} >Remove</button>
    </div>
        <div class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                              Item
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Image
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Price
                          </th>
                         <th scope="col" className="px-6 py-3">
                              Select
                          </th>
                      </tr>
                  </thead>
                 <tbody>
                  <>
                {aitems && aitems.map((item,ii)=>(
                      <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                          <td className="px-6 py-4">
                              {item.slug}
                          </td>
                          <td className="px-6 py-4">
                             <img  className='h-10 w-10' src={item.imgurl} ></img>
                          </td>
                          <td className="px-6 py-4 inline-flex">
                              <FaRupeeSign/>{item.price}
                          </td>
                          <td className="px-6 py-4">
                             <input   type='checkbox'   onChange={e=>{handleR(item._id,item.slug)}} ></input>
                          </td>
                         
                      </tr>))}
                      <br></br>
                      <tr><td></td><td></td><td></td><td></td><td></td>
                          <td className='ml-5 inline-flex'><FaRupeeSign/>{}</td>
                      </tr>
                      <hr></hr>
                   </>
                </tbody></div>
     </div></div>
    </div>
    </>)

}

export default Ritemm