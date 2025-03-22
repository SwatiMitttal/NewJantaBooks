

import { useState } from "react"
import { FaRupeeSign } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { remItem,changeQ} from "../store/Cart"
function Citem(props){
   const {id,slug,imgurl,price,count,quantity}=props.data
   const [q,setQ]=useState(props.data.quantity)
   const dispatch=useDispatch()
    const handleAdd=()=>{
          dispatch(changeQ({id:id,quantity:q,price:price}))
          setQ(quantity+1) }
   
       const handleRem=()=>{
         q===0?dispatch(remItem(id)):changeQ(id,q)
         setQ(quantity-1<1 ? 1:quantity-1)}

    return(<>
    <div  className="grid grid-cols-1 gap-3" >
      <div className="inline-flex border-2 gap-7 bg-gray-800 w-full">
        <img className="h-10 w-10 rounded-md  " src={imgurl}></img>
        <span  className=' rounded-sm  text-sm h-10 w-10 justify-center text-white
         text-center hover:scale-105'>{slug}</span>
        <h4 className="text-sm text-white"><FaRupeeSign/>{q*price}</h4>

        <div className="  flex justify-center items-center bg-gray-800 text-white">
            <button onClick={handleAdd} className=" rounded-sm  font-bold h-10 w-10 justify-center items-center hover:scale-105">+</button>
            <span  className=' rounded-sm font-bold h-10 w-10 justify-center text-center hover:scale-105'>{q}</span>
            <button onClick={handleRem} className="rounded-sm  font-bold h-10 w-10 justify-center items-center hover:scale-105">-</button>
            </div> 
            
      </div>
    </div>
    </>)
}

export default Citem