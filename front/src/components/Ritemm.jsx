import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { FaRupeeSign } from "react-icons/fa"
function Ritemm(){
    const [aitems,setAitems]=useState([])
    async function fitems(){ try{
        const res= await axios.get('https://newjvite2.onrender.com/items')
        if (res.status===200){
           setAitems(res.data)
           localStorage.setItem('aitems',res.data.data)
             toast(res.data)
           
          }}catch(err){
    console.log(err.message)
    }}

    useEffect(()=>{
      fitems()
    },[])
    return(<>
    <div className="inline-flex">
    <h4 className="text-sm font-semibold text-amber-900">Select items to be deleted</h4>

    <h3 key='h1' className='text-md text-green-950 justify-center text-2xl items-center font-weight-600'></h3>
        <div key='d2' className='flex justify-center items-center '  >
        <div key='d3' className='grid  lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-1 gap-0'  >
      {aitems && aitems.map((item,ind)=>(
              <div className="grid grid-cols-4 ">
               <h3 className="text-sm text-amber-900 font-semibold ml-4">  {item.slug}  </h3>
               <input  type='checkbox' ></input>
               </div>
        ))};

        <div class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" className="px-6 py-3">
                              Order Id
                          </th>
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
                              Quantity
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
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                          </th>
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
                             {item.quantity}
                          </td>
                          <td className="px-6 py-4">
                             <input   type='checkbox' ></input>
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