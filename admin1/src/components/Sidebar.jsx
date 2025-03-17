import axios from "axios"
import { FaGifts,FaList } from "react-icons/fa"
import { useState } from "react"
import List from "./List"
import { FaRupeeSign ,FaCaretDown} from "react-icons/fa"
function Sidebar(){
    const [sorder,setSorder]=useState(false)
    const [email,setEmail]=useState('')
    const [nform,setNform]=useState(false)
    const [drop,setDrop]=useState(true)
    const [cat,setCat]=useState('')
    const [data,setData]=useState()
    const [img,setImg]=useState()
    const litems=['name','price','rating','category','note','image']
    const citems=['bags','toys','rakhis','stationary','bottles','brands','other']
    function handleC(e){
      const name=e.target.name 
      const val=e.target.value
       setData(...data, {[name]:val})
    }
    return(
       
        <>
<div className="inline-flex">
  <div className="grid grid-cols-1 w-110 border-1 border-gray-300 ">
      <div  className="h-10 w-80 inline-flex justify-center items-center 
         mt-5 font-semibold border-2 border-gray-200 hover:scale-105 hover:bg-slate-100 "  >
            <FaGifts className="h-8 w-8 mr-4" /> Orders</div>
            <div  className="h-10 w-80 inline-flex justify-center items-center 
         mt-5 font-semibold border-2 border-gray-200 hover:scale-105 
          hover:bg-slate-100 "   onClick={e=>setNform(true)} >
            <FaList className="h-4 w-4 mr-4" /> Add new Item</div>
      <hr className="mt-5 mb-5 "></hr>  
    <div className="inline-block ">
          <label className="text-sm">pls enter email</label>
          <input  type="email" className="border-2 border-gray-200 text-sm
          w-80 hover:bg-slate-100" placeholder="emter email" onChange={e=>setEmail(e.target.value)}></input>
          <button className="bg-black text-sm text-white p-2 rounded-md
           mt-3 hover:scale-105"  onClick={e=>setSorder(true)}>Get Orders</button>
    </div>
  </div>
  <form>
    <h4 className="text-sm ml-10 font-semibold">Add new Item</h4>
      <div className="grid grid-cols-2 gap-2">
          
             {litems.map((item,i)=>(
                <>
                <p className="text-sm font-semibold">{item}</p>
                <div className="inline-flex">
                { i===1? <span><FaRupeeSign/></span>:<></>  }
                
                <input type={i===5?'file':'text'}  
                 className="border-2 border-gray-400 rounded-sm hover:bg-slate-100  text-sm"
                   onChange={e=>{handleC(e);i===5?setImg(e.target.files[0]):console.log('')}}
                 ></input>
                {i===3? citems.map((i,n)=>(<span className="text-sm
                 bg-amber-300 border-2 border-amber-600 p-1 
                 font-medium hover:scale-105" onClick={e=>setCat(i)}>{i}</span>))
                    :<></>}
                
                 </div>
                </>
             ))}
             <img src={img?URL.createObjectURL(img):'../../up.png'}
                  className="h-20 w-20 rounded-sm ml-100">
            </img>
        
      </div>
  </form>
  </div>
  {sorder?<div> <List email={email}/> </div>:<></>}
</>
    )
}

export default Sidebar