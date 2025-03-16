
import { Link } from 'react-router-dom'
import {useDispatch}  from 'react-redux'

import { FaRupeeSign,FaCartPlus } from 'react-icons/fa'
import Rating from './Rating'
import { addItem } from '../store/Cart'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function Pcart(props){
    const {_id,note,cat,count,imgurl,rating,price,slug}=props.data
   
    const dispatch=useDispatch()
    const [cbot,setCbot]=useState(0)
    const light='w-5 h text-red-700  text-center align-center text-bold hover:bg-green-100 rounded-md border-2 hover:bg-green-200 border-red-700'
    const cc=Array.from({length:count}, (_, index) => index + 1);
    const dark='w-5 h text-red-700 text-center align-center text-bold bg-green-300  hover:bg-green-200  rounded-md border-2 hover:bg-green-200 border-red-700'
  
      async function handleAdd(){
       dispatch(addItem({
            id:_id,
            quantity:1,
            price:price,
            imgurl:imgurl,
            note:note,
            cbot:cbot,
            rating:rating,
            slug:slug
        })) }
        
return(
        <div className='bg-white p-5 rounded-lg  shadow-sm'>
        <p className='text-sm text-amber-700 font-semibold'>{slug}</p>
          <Link  to={slug}>
            <br></br>
        <img   src={imgurl} alt='' className='h-60 w-60 object-contain 
  rounded-xl object-top hover:scale-105' ></img>   
      </Link>
      {cat==='bottlesm'?  <>
  <h4 className="text-green-900 ">PICK BOTTLE</h4>
      <div className="inline-flex">
      {cc.map((i, id) => ( 
      <>
    <div  key={id} onClick={()=>{setCbot(id+1);handleAdd()}}
       className={cbot===i?dark:light}>{i}</div>   </>))}
    </div>
   </>:<></>  }
         <h3 className='flex justify-center items-center'>
         <span className='inline-flex'>  <FaRupeeSign/> <s> {price} </s> <FaRupeeSign  /> {(price-(.2*price))}    </span>   
           </h3>
            <span className='text-md font-bold text-amber-900'>20% Discount</span>
            <Rating  rating={rating} />
         <h3 className='flex justify-center items-center text-md font-semibold text-amber-700 '> {note}
            </h3>
         
         <div className='flex justify-center items-center'>
          <button className='text-sm text-white bg-slate-950 rounded-xl
            p-2  flex  justify-center items-center gap-2 hover:bg-slate-700
            ' type='button' 
            onClick={cbot===0?handleAdd:cbot>0?toast('item added'):''} >     <FaCartPlus/>ADD TO CART</button>
         </div>
         </div>
    )
}

export default Pcart