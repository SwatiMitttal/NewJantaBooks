
import { Link } from 'react-router-dom'
import {useDispatch}  from 'react-redux'
import { FaRupeeSign,FaCartPlus } from 'react-icons/fa'
import Rating from './Rating'
import { addItem } from '../store/Cart'
import { useState } from 'react'
import { toast } from 'react-toastify'

import SimpleImageSlider from 'react-simple-image-slider'

function Pcart(props){
    const {_id,note,cat,count,imgurl,img2,rating,price,slug,disc}=props.data
    const images=[{url:imgurl},{url:img2}]
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
            img2:img2,
            note:note,
            cbot:cbot,
            rating:rating,
            slug:slug,
            disc:disc
        })) }
        
return(
        <div className='bg-white p-5 rounded-lg  shadow-sm'>
        <p className='text-sm text-amber-700 font-semibold'>{slug}</p>
          <Link  to={slug}>
            <br></br>

  <img   src={imgurl} alt='' className='h-50 w-50 object-contain 
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

/* <SimpleImageSlider     width={250}
        height={250}
        borderRadius={10}
        images={images}
        showBullets={true}
        showNavs={true}  />  */