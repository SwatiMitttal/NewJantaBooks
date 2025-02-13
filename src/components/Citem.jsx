
import { useEffect,useState } from "react";
import { prods1 } from "../assets/prods1";
import { useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { changeQ} from "../store/Cart";
function Citem(props){
  const cart=useSelector(store=>store.cart.items)
  const {id,quantity}=props.data
 
  const [detail,setDetail]=useState([])
   
   const dispatch=useDispatch()
    const handleAdd=()=>{
        dispatch(changeQ({
            id:id,
            quantity:quantity+1
        }))
        }
 
     const handleRem=()=>{
       dispatch(changeQ({
        id:id,
        quantity:quantity-1
       }))}

    useEffect(()=>{
        const fdet=prods1.filter(item=>item.id===id)[0]
        setDetail(fdet)
        
    },[id,quantity])
    return(
        <>
    <div className="flex  justify-center items-center p-2  border-b-2 bg-zinc-500 text-white rounded-lg" >
      <img  src={detail.imgUrl} alt='' className="w-1/6"  ></img>
    <h3>{detail.name}</h3>
    <h3 className="flex justify-center text-sm items-center"><FaRupeeSign/>{detail.price * quantity}</h3>
    
    <div className="  flex justify-center items-center">
            <button onClick={handleAdd} className="bg-zinc-500  text-md font-bold rounded-lg h-10 w-10 justify-center items-center">+</button>
            <span  className='bg-slate-900  font-bold h-6 w-10 text-sm items-center rounded-md'>{quantity}</span>
            <button onClick={handleRem} className="bg-zinc-500 text-md font-bold rounded-lg h-10 w-10 justify-center items-center">-</button>
            </div>     
      
    </div>
        </>
    )
}

export default Citem