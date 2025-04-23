import { toast } from "react-toastify"
import axios from "axios"
import {  useState } from "react"
import { FaRupeeSign } from "react-icons/fa"
import Nitem from "./Nitem"
function Nform(){
    const light="text-sm bg-amber-300 border-2 border-amber-600 p-1 font-medium hover:scale-105"
    const dark="text-sm bg-amber-500 border-2 border-amber-600 p-1 font-medium hover:scale-105"
    const litems=['name','price','rating','category','discount','note','count','image','image2']
    const citems=['bags','toys','rakhis','stationery','bottles','brands','books','poshaks','pool-summer-wear','pool-summer-accessories']

     const [data,setData]=useState({
             note:'',
             name:'',
             price:'',
             cat:'',
             disc:'',
             rating:'',
             count:'',
            image:'',
            img2:''
         })
    
     const [cat,setCat]=useState('')
     const [img,setImg]=useState(null)
     const [img2,setImg2]=useState(null)
      const [url,setUrl]=useState('')
      const [url2,setUrl2]=useState('')
      const [c,setC]=useState(false)
     
     function handleC(e){
        const name=e.target.name 
        const val=e.target.value
        setData(data=>({...data,[name]:val}))
          }
      
   async function handleS(e) {
         
           e.preventDefault()
           const purl='https://res.cloudinary.com/dsttk9lau/image/upload/v1744778904/'
            toast('processing....pls wait')
            const fdata1=new FormData()
            const files1=[]
            const names=[]
            
            files1[0]=img
            files1[1]=img2
            names[0]='.'+img.name.split('.')[1]
            names[1]='.'+img2.name.split('.')[1]
           fdata1.append('upload_preset','Newjupload')
           fdata1.append('cloud_name','dsttk9lau')

           for (const i in files1){
            fdata1.append('file',files1[i])
              await  axios.post('https://api.cloudinary.com/v1_1/dsttk9lau/image/upload',fdata1).then(res=>{
               i===0?setUrl(purl+res.data.public_id+names[i]):setUrl2(purl+res.data.public_id+names[i])
               
                })
           }
           alert(url)

            }
return(
        <>
<form onSubmit={e=>handleS(e)}>
<h4 className="text-sm ml-10 font-semibold">Add new Item</h4>
   <div className="grid grid-cols-2 gap-2 w-100 ml-20">
      {litems.map((item,i)=>(
           <>
        { item !=='image2'? <p className="text-sm font-semibold">{item}</p> :<></> }
         
           <div className="inline-flex">
          {i===0?<div className="inline-block"></div> :<></>}
           { i===1? <span><FaRupeeSign/></span>:<></>  }
           
           {  i!==3 ? <input type={i===7 || i===8?'file':'text'  } name={item} placeholder={item}
                 className="border-2 border-gray-400 rounded-sm hover:bg-slate-100  text-sm ml-1"
                  onChange={e=>{i===7?setImg(e.target.files[0]):i===8?setImg2(e.target.files[0]):handleC(e)}}
                ></input>:<></>  } 

<div className="inline-block ml-1">
              {i===7?<>  <img alt='' src={img?URL.createObjectURL(img):'../../up.png'}
               className="h-20 w-20 rounded-sm ml-25" ></img></>    :<></>    }
              { i===8?<>  <img alt='' src={img2?URL.createObjectURL(img2):'../../up.png'}
               className="h-20 w-20 rounded-sm ml-25" ></img></>    :<></>    }

          </div>
               {i===3? citems.map((i,n)=>(<span className={cat===i?dark:light} 
                  onClick={e=>{i==='pool-summer-wear' || i==='pool-summer-accessories'?setCat('summer'):setCat(i)}}>{i}</span>))
                   :<></>}
            </div>
           </>))}
          
     </div>
     <button  type='submit' className="bg-black font-semibold text-white p-2 rounded-md 
             hover:scale-105 h-7"  onClick={e=>setC(true)}>Add</button>
</form>
   { url && url2 && c && <Nitem  data={data}  cat={cat} img={img} img2={img2} url={url} url2={url2}/>  }
         </>
    )
}

export default Nform
//https://res.cloudinary.com/dsttk9lau/image/upload/v1744866470/sbag2_gfd08i.jpg


