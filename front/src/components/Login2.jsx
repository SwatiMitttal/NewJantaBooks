
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { useDispatch, } from "react-redux";
import Cartab from "./Cartab";
import Spanel from "./Spanel";
import axios from "axios"
import { setU } from "../store/Users";
import { useNavigate } from "react-router-dom"
import Signup from './Signup '
import LoginButton from "./Login";
function Login2(props){
    
    const nav=useNavigate()
    const [email,setEmail]=useState('');
    const [user,setUser]=useState(false)
    const [c,setC]=useState(false)
     const dispatch=useDispatch()
    async function handleS(e){
      e.preventDefault()
      setC(true)
    try{
       const res= await axios.post('https://newjvite3.onrender.com/login',{email:email})
       if(res.status===200) { 
        dispatch(setU({email:res.data.email,
          name:res.data.name,
          passw:res.data.passw,
          mobile:res.data.mobile,
          add1:res.data.add1,
          add2:res.data.add2,
          city:res.data.city,
          stat:res.data.stat,
          country:res.data.country,
          pin:res.data.pin,
        newu:false}))
      setUser(true)
       nav('/totamt')
      }else{
        nav('/signup') }}
        catch(err){
            console.log(err.message)
          }}

    useEffect(()=>{
      setUser(false)
},[])
  return(
        <>
         <Link  to='/' > <h2 className="font-semibold text-md text-amber-800 ml-20 hover:font-bold">HOME</h2></Link>  <br></br> 
    <div className="inline-flex">
         <div  className="w-[400px]">
     <br></br>  
<h2 className="font-bold text-ml mt-8 ml-10 text-amber-600 hover:scale:110">LOGIN</h2>
        <form  className=' mt-10 grid  w-50 ml-12 '>
        <fieldset>
          <legend className="text-md font-semibold"> Enter email  </legend>
      <div className="inline-flex" >
      
   <input  type='text' id='email'
        placeholder='email'
        className=' p-4 border-slate-500 border-2 rounded-md bg-slate-200 text-slate-900 w-60 font-semibold
         hover:bg-slate-300 overflow-auto'
        onChange={(e)=>{setEmail(e.target.value)}}
        required='true'
        ></input> </div> 
    </fieldset></form>
{user && c?<Link  to='/totamt' > <button className="bg-amber-600 text-white font-semibold  p-3 ml-10
    rounded-md hover:bg-amber-900"  onClick={handleS}
     >Submit</button>  </Link> :  <button className="bg-amber-600 text-white font-semibold  p-3 ml-10
     rounded-md hover:bg-amber-900"  onClick={handleS}
      >Submit</button>  }
      
   { !user && c===true?<Signup />:<></>}
    
  </div>
        <Spanel  />
        <Cartab/>
    </div> </>)}

export default Login2