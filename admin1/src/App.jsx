import { FaGifts,FaList ,FaRupeeSign ,FaEdit} from 'react-icons/fa'
import './App.css'
import List from './components/List'
import { useState } from 'react'
import { ToastContainer ,toast} from 'react-toastify'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Ritem from './components/Ritem'
function App()  {
  const [sorder,setSorder]=useState(false)
  const [email,setEmail]=useState('')
  const [nform,setNform]=useState(false)
  const [cat,setCat]=useState('')
  const [ritem,setRitem]=useState(false)
  const [data,setData]=useState({
    note:'',
    name:'',
    price:'',
    cat:'',
    rating:''})
const [img,setImg]=useState()
const light="text-sm bg-amber-300 border-2 border-amber-600 p-1 font-medium hover:scale-105"
const dark="text-sm bg-amber-500 border-2 border-amber-600 p-1 font-medium hover:scale-105"
const litems=['name','price','rating','category','note','image']
const citems=['bags','toys','rakhis','stationary','bottles','brands','other']

function handleC(e){
  const name=e.target.name 
  const val=e.target.value
   setData(data=>({...data,[name]:val}))
}

async function handleS(e) {
  e.preventDefault()
  const fdata=new FormData()
  fdata.append('img',img)
  fdata.append('slug',data.name)
  fdata.append('note',data.note)
  fdata.append('price',data.price)
  fdata.append('rating',data.rating)
  fdata.append('cat',cat)
  toast(data.price)
    const res=await axios.post('https://newjvite3.onrender.com/aitems',fdata)
      if(res.status===200){
          toast('item added')}}

  async function handleK(e){
     setNform(false)
     setSorder(false)
     setRitem(true)
     
  }
  
  return (
    <>
    <div>
   <div className='inline-flex justify-items-start'>
    <img  src='../../newjanta.jpeg' className="h-10 w-10" ></img>  
     <h3 className='font-semibold'>Admin Panel</h3>
    </div>
    <hr></hr>
<div className="inline-flex">
    <div className="grid grid-cols-1 w-110 border-1 border-gray-300 ">
      <div  className="h-10 w-80 inline-flex justify-center items-center 
               mt-5 font-semibold border-2 border-gray-200 hover:scale-105 hover:bg-slate-100 "  >
                  <FaGifts className="h-8 w-8 mr-4" /> Orders</div>  
          <div  className="h-10 w-80 inline-flex justify-center items-center 
               mt-5 font-semibold border-2 border-gray-200 hover:scale-105 
                hover:bg-slate-100 "   onClick={e=>setNform(true)} >
                  <FaList className="h-4 w-4 mr-4" /> Add new Item</div>
          <div  className="h-10 w-80 inline-flex justify-center items-center 
               mt-5 font-semibold border-2 border-gray-200 hover:scale-105 
                hover:bg-slate-100 "   onClick={e=>setRitem(true)} >
                  <FaEdit className="h-4 w-4 mr-4" /> Remove Item</div>
        <div className="inline-block ">
          <label className="text-sm">pls enter email</label>
          <input  type="email" className="border-2 border-gray-200 text-sm
          w-80 hover:bg-slate-100" placeholder="emter email" onChange={e=>setEmail(e.target.value)}></input>
          <button className="bg-black text-sm text-white p-2 rounded-md
           mt-3 hover:scale-105"  onClick={e=>setSorder(true)}>Get Orders</button>
    </div>
    </div>
  {nform? <form  onSubmit={e=>handleS(e)}>
     <h4 className="text-sm ml-10 font-semibold">Add new Item</h4>
        <div className="grid grid-cols-2 gap-2">
           {litems.map((item,i)=>(
                <>
                <p className="text-sm font-semibold">{item}</p>
                <div className="inline-flex">
                     { i===1? <span><FaRupeeSign/></span>:<></>  }
                     {  i!==3?  <input type={i===5?'file':'text'  } name={item}
                      className="border-2 border-gray-400 rounded-sm hover:bg-slate-100  text-sm"
                       onChange={e=>{i===5?setImg(e.target.files[0]):handleC(e)}}
                     ></input>:<></>  } 
                     {i===3? citems.map((i,n)=>(<span className={cat===i?dark:light} 
                       onClick={e=>setCat(i)}>{i}</span>))
                        :<></>}
                 </div>
                </>))}
                <div className="inline-block">
                <img src={img?URL.createObjectURL(img):'../../up.png'}
                  className="h-20 w-20 rounded-sm ml-100">
                 </img>
                 <button  type='submit' className="bg-black font-semibold text-white p-2 rounded-md
                  hover:scale-105 h-7" >Add</button>
                   </div>
         </div>
       </form>  :<></> }
     </div>
     {sorder?<div> <List email={email}/> </div>:<></>}
     {ritem?<div> <Ritem /> </div>:<></>}
    <ToastContainer>
   </ToastContainer> 
   
   </div> 
    </>
  )
}

export default App
