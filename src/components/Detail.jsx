import { useState ,useEffect} from "react"
import { useParams } from "react-router-dom"
import { prods1 } from "../assets/prods1"
import { FaRupeeSign } from 'react-icons/fa'
import {addItem,remItem} from '../store/Cart'
import { useDispatch } from "react-redux"
import Header from "./Header"
function Detail(){
    const {slug}=useParams()
    const [quantity,setQuantity]=useState(1)
    
    const [detail,setDetail]=useState([])
    const dispatch=useDispatch()

    useEffect(()=>{
      const fdetail=prods1.filter(item=>item.slug===slug)
      if(fdetail.length>0){
        setDetail(fdetail[0])
      
      }
    },[slug,quantity])

    const handleAdd=()=>{
       dispatch(addItem({id:detail.id,quantity:1,price:detail.price,imgUrl:detail.imgUrl}))
       setQuantity(quantity+1) }

    const handleRem=()=>{
      dispatch(remItem(detail.id))
      setQuantity(quantity-1<1 ? 1:quantity-1)}

   return(
        <>
     <Header  />
        <h2 className="text-md font-semibold text-amber-700">{detail.slug}</h2>

        <div  className="grid grid-cols-3 gap-5  mt-5" >
           <div>
            <img  src={detail.imgUrl}  alt=''className="h-25 w-25" ></img>
        </div>
        <div className="flex flex-col  gap-6 mt-20 ">
           <h2 className="flex font-semibold uppercase text-md text-amber-600 justify-center items-center">{detail.slug}</h2> 
           <h4 className=" text-xl font-semibold  flex justify-center items-center "><FaRupeeSign/>{detail.price}</h4>
           <h4 className=" text-xl font-semibold  flex justify-center items-center ">{detail.note}</h4>

           <button  className="text-md font-semibold text-amber-700 hover:scale-110"
           onClick={handleAdd}
           >ADD TO CART</button>
           <div className="  flex justify-center items-center">
            <button onClick={handleAdd} className="bg-amber-200 rounded-sm  font-bold h-10 w-10 justify-center items-center hover:scale-110">+</button>
            <span  className='bg-amber-200 rounded-sm  font-bold h-10 w-10 justify-center text-center hover:scale-110'>{quantity}</span>
            <button onClick={handleRem} className="bg-amber-200 rounded-sm  font-bold h-10 w-10 justify-center items-center hover:scale-110">-</button>
            </div>     
      
      </div>
     </div>
       </>
    )
}

export default  Detail