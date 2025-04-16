import { toast } from "react-toastify"
import axios from "axios"
import { useState } from "react"
import { FaRupeeSign } from "react-icons/fa"
import Nitem from "./Nitem"


function Nform(){
    const light="text-sm bg-amber-300 border-2 border-amber-600 p-1 font-medium hover:scale-105"
    const dark="text-sm bg-amber-500 border-2 border-amber-600 p-1 font-medium hover:scale-105"
    const litems=['name','price','rating','category','discount','note','image']
    const citems=['bags','toys','rakhis','stationary','bottles','brands','clothing store','poshaks']

     const [data,setData]=useState({
             note:'',
             name:'',
             price:'',
             cat:'',
             disc:'',
             rating:'',
            image:''})
    
     const [cat,setCat]=useState('')
     const [img,setImg]=useState()
    
     const [fdata,setFdata]=useState()
     function handleC(e){
        const name=e.target.name 
        let val=e.target.value
         if(img){
          
            val=e.target.files[0].filename
         }
         setData(data=>({...data,[name]:val}))
      }
      

     async function handleS(e) {
           e.preventDefault()
           toast('processing....pls wait')
            const fdata1=new FormData()
           fdata1.append('file',img)
           
           fdata1.append('upload_preset','Newjupload')
           fdata1.append('cloud_name','dsttk9lau')
           
             const res=await axios.post('https://https://res.cloudinary.com/dsttk9lau/image/upload',fdata1)
               const url=res.json
            }
    
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
           {  i!==3?  <input type={i===6?'file':'text'  } name={item} placeholder={item}
                 className="border-2 border-gray-400 rounded-sm hover:bg-slate-100  text-sm"
                  onChange={e=>{i===6?setImg(e.target.files[0]):handleC(e)}}
                ></input>:<></>  } 
             {i===3? citems.map((i,n)=>(<span className={cat===i?dark:light} 
                  onClick={e=>setCat(i)}>{i}</span>))
                   :<></>}
            </div>
           </>))}
           <div className="inline-block">
           <img src={img?URL.createObjectURL(img):'../../up.png'} alt='' className="h-20 w-20 rounded-sm ml-100">
            </img>
            <button  type='submit' className="bg-black font-semibold text-white p-2 rounded-md
             hover:scale-105 h-7" >Add</button>
              </div>
     </div>
</form>
   {img &&   <Nitem  data={data}  cat={cat} img={img} />  }
        </>
    )
}

export default Nform


