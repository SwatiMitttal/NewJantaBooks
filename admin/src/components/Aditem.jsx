import {  useState } from "react"

import { FaRupeeSign } from "react-icons/fa"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import axios from 'axios'
import {toast} from 'react-toastify'
function Aditem({url}){
   
    const ff=['note','name','price','rating']
    const [img,setImg]=useState()
   const cats=['toys','stationary','books','bags','bottles','rakhis']
    const [data,setData]=useState({
      slug:'',
      price:'',
      cat:'',
      note:'',
      rating:'',
      price1:'',})

     
 async function handleS(e){
 e.preventDefault()
 const res=await axios.post(`${url}/aitem`,data) 
  if(res.status===200){
      toast('item added')
      simg()
    } }
   async function simg(){
  
  const fdata=new FormData()
  fdata.append('img',img)
  fdata.append('slug',data.name)
  fdata.append('price',data.price)
  fdata.append('rating',data.rating)
  fdata.append('note',data.note)
  fdata.append('cat',data.cat)
    const res1=await axios.post(`${url}/aitems`,fdata)
    if(res1.status===200){
      toast('Img uploaded')
        }
   }

  const handleC=(e)=>{
    
     const name=e.target.name
     const val=e.target.value
    setData(data=>({...data,[name]:val}))}
  return(
  <>
  <Navbar/>
  <div  className="inline-flex" >
   <Sidebar/>
     <form id='form1' onSubmit={handleS} >
      < div className="grid grid-cols-2 w-110">
         <p className="text-sm text-amber-800 font-semibold p-2">NAME</p>
         <p className="text-sm text-amber-800 font-semibold p-2">VALUE</p>
                 
       {ff.map((item,i)=>(<>
         <label className="ml-6 inline-flex  justify-between gap-10 ">{item}{item==='price'?<FaRupeeSign/>:<></>}</label>
             <input name={item}  placeholder={item} className=" w-full border-2   hover:bg-red-100"
               onChange={(e)=>{handleC(e) }}></input> 
          </>)) }
       <label className="ml-6" >category</label> 
        <select name='cat' className="text-sm text-amber-700 hover:bg-red-100"
              onChange={(e)=>{handleC(e)}}>
        {cats.map(item=>(<>
                <option name={item} className="text-sm text-amber-700 hover:bg-red-100" 
                key={item}>{item}</option>
            </>))}
        </select>
       
         <label className="ml-6" >image</label>
         <div className="inline-flex">
         <input name='img' type='file'  className=" w-full border-1
              border-amber-950 rounded-sm hover:bg-red-100 text-sm font-semibold"
               onChange={(e)=>{setImg(e.target.files[0]);handleC(e)}}
          ></input>  
           <img className="h-20 w-20 border-2" alt='upload..' src={img? URL.createObjectURL(img):'../../up.png'}></img>
           </div>
         <button  type='submit' className="bg-black text-white text-md w-14
         hover:scale-105 p-2 ml-60 rounded-md"
          onClick={(e)=>handleS(e)} > ADD </button>


            
          </div>
       </form>
    </div>
</>
  )}
  export default Aditem
