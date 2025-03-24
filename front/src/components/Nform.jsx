import { toast } from "react-toastify"
import axios from "axios"
import { useState } from "react"
import { FaRupeeSign } from "react-icons/fa"
function Nform(){
    const light="text-sm bg-amber-300 border-2 border-amber-600 p-1 font-medium hover:scale-105"
    const dark="text-sm bg-amber-500 border-2 border-amber-600 p-1 font-medium hover:scale-105"
    const litems=['name','price','rating','category','discount','note','image']
    const citems=['bags','toys','rakhis','stationary','bottles','brands','other']

     const [data,setData]=useState({
             note:'',
             name:'',
             price:'',
             cat:'',
             disc:'',
             rating:''})
     const [email,setEmail]=useState('')
     const [nform,setNform]=useState(false)
     const [cat,setCat]=useState('')
     const [img,setImg]=useState()

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
           
             const res=await axios.post('https://newjvite3.onrender.com/aitems',fdata)
               if(res.status===200){
                   toast('item added')}}

    
    return(
        <>
<form onSubmit={e=>handleS(e)}>
<h4 className="text-sm ml-10 font-semibold">Add new Item</h4>
   <div className="grid grid-cols-2 gap-2 w-100 ml-20">
      {litems.map((item,i)=>(
           <>
           <p className="text-sm font-semibold">{item}</p>
           <div className="inline-flex">
           { i===1? <span><FaRupeeSign/></span>:<></>  }
           {  i!==3?  <input type={i===5?'file':'text'  } name={item} placeholder={item}
                 className="border-2 border-gray-400 rounded-sm hover:bg-slate-100  text-sm"
                  onChange={e=>{i===5?setImg(e.target.files[0]):handleC(e)}}
                ></input>:<></>  } 
             {i===3? citems.map((i,n)=>(<span className={cat===i?dark:light} 
                  onClick={e=>setCat(i)}>{i}</span>))
                   :<></>}
            </div>
           </>))}
           <div className="inline-block">
           <img src={img?URL.createObjectURL(img):'../up.png'} alt='' className="h-20 w-20 rounded-sm ml-100">
            </img>
            <button  type='submit' className="bg-black font-semibold text-white p-2 rounded-md
             hover:scale-105 h-7" >Add</button>
              </div>
     </div>
</form>
        </>
    )
}

export default Nform