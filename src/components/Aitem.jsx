import {  useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { FaRupeeSign } from "react-icons/fa"

function Aitem(){

    const ff=['note','name','price','stock']
    const [imgg,setImgg]=useState()
    const [note,setNote]=useState('')
    const [slug,setSlug]=useState('')
    const [price,setPrice]=useState(0)
    const [stock,setStock]=useState(0)
    const [imgUrl,setImgUrl]=useState('')
    const [cat,setCat]=useState('')
    const nav=useNavigate()
    const cats=['toys','stationary','books','bags','bottles']

    
   async function handleC(){
     
   }
     
   async function handleS(){
      const fdata=new FormData()
      try{alert(note,price)
      await axios.post('http://localhost:4001/aitem',{note,slug,price,imgUrl,cat}).
      then(res=>{alert(res)
   })}catch(err){
          console.log(err.message)
        }
      fdata.append('imgg',imgg)
      try{
      await axios.post('http://localhost:4001/simg',fdata,
     ).then(res=>{alert(res.data)
          nav('/')
    })
     }catch(e){
       console.log(e.message)
    }
  }
    return(<>
        <br></br>

        <Link  to='/' > <h2 className="font-semibold text-md text-amber-800 ml-20 hover:font-bold">HOME</h2></Link>
             <br></br>
            <p  className="text-sm text-amber-800 justify-center items-center
            font-semibold "> ADD NEW ITEM</p><br></br>
          <form action='POST'   >

            <table className="border-2 border-amber-800 ml-10 w-200 rounded-sm">
              <th className="text-sm text-amber-800 font-semibold p-2">NAME</th>
              <th className="text-sm text-amber-800 font-semibold p-2">VALUE</th>
                 
              <colgroup>
                   <col span='2' className="text-md text-amber-800 font-semibold p-3 border-2 border-amber-950 rounded-sm"></col>
                   </colgroup>  
                   {ff.map(item=>(
            <tr>
             
             <td>  <label className="inline-flex justify-between  gap-20 ">{item}{item==='price'?<FaRupeeSign/>:''}</label>  </td>
             <td> <input id={item}  placeholder={item} className=" w-100 border-2 border-amber-950 rounded-sm hover:bg-amber-200"
               onChange={(e)=>{item==='note'? setNote(e.target.value) :item==='name'?setSlug(e.target.value):item==='price'?setPrice(e.target.value):setStock(e.target.value) }}
             ></input>   </td>
            </tr>
            ))}  
       <tr>
       <td>  <label >Category</label>  </td>
         <td ><select className="text-sm text-amber-700 hover:bg-amber-100"
              onChange={(e)=>{setCat(e.target.value)}}
         >
            {cats.map(item=>(<>
                <option className="text-sm text-amber-700 hover:bg-amber-100" 
                key={item}>{item}</option>
            </>))}
             
            </select></td>
       </tr>
         <tr>
         <td>  <label >Image Upload</label>  </td>
             <td> <input id='img8' type='file'  className=" w-100 border-2
              border-amber-950 rounded-sm hover:bg-amber-200 text-sm font-semibold"
               onChange={(e)=>{setImgg(e.target.files[0]) ;setImgUrl('../../uploads'+e.target.value.split('\\')[e.target.value.split('\\').length-1])}}
                ></input>   </td>
         </tr>
       
         <tr> </tr>
         </table>
         <br></br>

         <button className="bg-amber-600 text-white text-md hover:scale-105 p-4 ml-12 rounded-md"
          onClick={handleS} >  Submit</button>
        </form>
      
</>
    )}

export default  Aitem