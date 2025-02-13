
import { Link } from 'react-router-dom'
import {useDispatch,useSelector}  from 'react-redux'
import { FaRupeeSign,FaCartPlus } from 'react-icons/fa'
import Rating from './Rating'
import { addItem } from '../store/Cart'

function Pcart(props){
    const {id,note,imgUrl,rating,price,slug}=props.data
    const dispatch=useDispatch()
     const items=useSelector(store=>store.cart.items)
     //const cuser=useSelector(store=>store.users.cuser)
      async function handleAdd(){
       
       dispatch(addItem({
            id:id,
            quantity:1,
            price:price,
            imgUrl:imgUrl
        })) }

       
    return(
        
        <div className='bg-white p-5 rounded-lg  shadow-sm'>

            <p className='text-sm text-amber-700 font-semibold'>{slug}</p>
          <Link  to={slug}>
         <img   src={imgUrl} alt='' className='h-80 w-70 object-cover rounded-xl object-top hover:scale-105' ></img> 
         </Link>
         
         <h3 className='flex justify-center items-center'>
         <span className='inline-flex'>  <FaRupeeSign  /> <s>{(price+(.2*price))} </s>    </span>   
            <FaRupeeSign/>  {price} 
        </h3>
            <span className='text-md font-bold text-amber-900'>20% Discount</span>
            <Rating  rating={rating} />
         <h3 className='flex justify-center items-center text-md font-semibold text-amber-700 '> {note}
            </h3>
         
         <div className='flex justify-center items-center'>
          <button className='text-sm text-white bg-slate-950 rounded-xl
            p-2  flex  justify-center items-center gap-2 hover:bg-slate-700
            ' type='button' 
            onClick={handleAdd} >     <FaCartPlus/>ADD TO CART</button>
         </div>
         </div>
    )
}

export default Pcart