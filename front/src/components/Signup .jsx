import { useState ,useRef} from "react"
import {Link} from 'react-router-dom'

import { useDispatch,useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Address from "./Address"


import { FaEye } from "react-icons/fa"
import { setU } from "../store/Users"
function Signup({url}){
   
  const [isSignup,SetisSignup]=useState(false)
  const [email,setEmail]=useState('')
  const [mobile,setMobile]=useState('')
  const [passw,setPassw]=useState('')
  const [name,setName]=useState('')
  const  [add1,setAdd1]=useState("")
  const  [add2,setAdd2]=useState("")
  const  [city,setCity]=useState("")
  const  [stat,setStat]=useState("")
  const[tt,setTt]=useState('password')
  const  [country,setCountry]=useState("")
  const  [pin,setPin]=useState("")
  const [ff,setFf]=useState('')
  const ffields=['name','email','password','mobile','address1','address2','city','state','country','pincode'];
  const nav=useNavigate()
  const dispatch=useDispatch()
  const emaill=useSelector(store=>store.users.user)
  const inputRef=useRef()
  async function handleS(e){
    e.preventDefault()
    const user1= {
      name:name,email:email,
      passw:passw,mobile:mobile,
      add1:add1,add2:add2,
      city:city,stat:stat,
      country:country, pin:pin,newu:true}
      dispatch(setU(user1))
        nav('/totamt')}
  const handleC=()=>{
   tt==='text'?setTt('password'):setTt('text')
 }

 
return (
    <>
  
   <div className="bg-white">
       <div  className="w-[300px]">    
    <h2 className="font-semibold text-md text-amber-800">SIGNUP</h2>
    <form  >
    <div className=" inline-flex">
      
    <div className="inline-block">
   {ffields.map((item,ind)=>(<div>
    <label className="  text-white ml-10 mt-2 p-1 w-200 h-30 rounded-lg bg-slate-800 text-sm ">{item}</label>
    </div>))}
</div>
    <div  className='block'  >
    <input type='text'  key='name' placeholder="name"
    className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
    onChange={(e)=>setName(e.target.value)}
    required='true'
    ></input>
     
     <input type='email' key='email' placeholder="email" 
    className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
    onChange={(e)=>setEmail(e.target.value)}
    required='true'
    ></input>
     <div className="inline-flex">
     <input type={tt}   id='passw' placeholder="passw"
    className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
    onChange={(e)=>setPassw(e.target.value)}
    required='true'
    ></input>
    <FaEye className="mr-1"   onClick={handleC}
    /></div>

     <input type='text' key='mobile' placeholder="mobile"
    className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
    onChange={(e)=>setMobile(e.target.value)}
    required='true'
    ></input>
   
   <Address  pc='address1'  onChange={(e)=>setAdd1(e.target.value)} />
   <Address  pc='address2'  onChange={(e)=>setAdd2(e.target.value)}/>
   <Address  pc='city'  onChange={(e)=>setCity(e.target.value)}/>
   <Address  pc='state' onChange={(e)=>setStat(e.target.value)} />
   <Address  pc='country'  onChange={(e)=>setCountry(e.target.value)}
    />
    
    
    
   
     <input type='text'  placeholder="pincode"
    className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
    onChange={(e)=>setPin(e.target.value)}
    required='true'
    ></input>
  <br></br>
  </div>
    </div>
 
  <button  type='submit'
 className="w-20 bg-amber-600 hover:bg-amber-700 focus:ring-4 text-white  focus:ring-amber-900 font-small rounded px-2 py-2 text-center  dark:bg-blue-600  dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
 onClick={e=>handleS(e)}
 >  SUBMIT  </button> 
   
  </form>
<h3>Already have an account? <Link to='/login' className="hover:text-blue-900 font-semibold">{!isSignup ? 'Login' : 'Register'}  </Link>  </h3>
</div>
</div>


    </>
)
}
export default Signup

/* <StandaloneSearchBox
     onLoad={(ref)=>inputRef.current=ref}
     onPlacesChanged={handlePc}
  >*/