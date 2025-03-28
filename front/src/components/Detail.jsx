import { useState ,useEffect} from "react"
import { useParams } from "react-router-dom"
import { FaRupeeSign } from 'react-icons/fa'
import {addItem,changeQ} from '../store/Cart'
import { useDispatch } from "react-redux"
import Header from "./Header"
function Detail(){
    const {slug}=useParams()
    const aitems=[localStorage.getItem('aitems')]
    const [detail,setDetail]=useState({})
    const [q,setQ]=useState(1)
    const dispatch=useDispatch()
 function fitem(){
     const a=JSON.parse(aitems)
     const fdetail=a.filter(item=>item.slug===slug)
     setDetail(fdetail[0])}

    useEffect(()=>{
     fitem ()
    },[])

    const handleA=()=>{
        dispatch(addItem({id:detail._id,
         quantity:1,
         price:detail.price,
         imgurl:detail.imgurl,
         note:detail.note,
         cbot:detail.cbot,
         rating:detail.rating,
         slug:detail.slug,
         disc:detail.disc}))
    }
   
     const handleAdd=()=>{
              dispatch(changeQ({id:detail._id,quantity:(q+1),price:detail.price,imgurl:detail.imgurl}))
              setQ(q+1) }
       
     const handleRem=()=>{
         dispatch(changeQ({id:detail._id,quantity:q-1,price:detail.price}))
             setQ(q-1<1 ? 1:q-1)}
return(
        <>
     <Header  />
        <h2 className="text-md font-semibold text-amber-700">{detail.slug}</h2>

        <div  className="grid grid-cols-3 gap-5  mt-5" >
           <div className="inline-block">
            <img  src={detail.imgurl}  alt=''className="h-75 w-75" ></img>
           </div>
        <div className="flex flex-col  gap-6 mt-20 ">
           <h2 className="flex font-semibold uppercase text-md text-amber-600 justify-center items-center">{detail.slug}</h2> 
           <h4 className=" text-xl font-semibold  flex justify-center items-center "><FaRupeeSign/>{q===1?detail.price:detail.price*q}</h4>
           <h4 className=" text-xl font-semibold  flex justify-center items-center ">{detail.note}</h4>
         
           <button  className="text-md font-semibold text-amber-700 hover:scale-110"
           onClick={e=>handleA(e)}
           >ADD TO CART</button>
           <div className="  flex justify-center items-center">
            <button onClick={e=>handleAdd(e)} className="bg-amber-200 rounded-sm  font-bold h-10 w-10 justify-center items-center hover:scale-110">+</button>
            <span  className='bg-amber-200 rounded-sm  font-bold h-10 w-10 justify-center text-center hover:scale-110'>{q}</span>
            <button onClick={e=>handleRem(e)} className="bg-amber-200 rounded-sm  font-bold h-10 w-10 justify-center items-center hover:scale-110">-</button>
            </div>     
      
      </div>
     </div>
       </>
    )
}

export default  Detail