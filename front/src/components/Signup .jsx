import { useState ,useRef} from "react"
import {Link} from 'react-router-dom'

import { useDispatch,useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FaEye } from "react-icons/fa"
import { setU } from "../store/Users"

import { StandaloneSearchBox ,useJsApiLoader} from "@react-google-maps/api"
function Signup(props){
   
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
      name:name,email:props.mail,
      passw:passw,mobile:mobile,
      add1:add1,add2:add2,
      city:city,stat:stat,
      country:country, pin:pin,newu:true}
      dispatch(setU(user1))
      alert(user1.country)
        nav('/totamt')}
  const handleC=()=>{
   tt==='text'?setTt('password'):setTt('text')
 }

 const handlePc=()=>{

  let add=iref.current.getPlaces()
 
  const det=add[0].address_components
  const len=det.length
  console.log(det[1])
      
         setPin(det[len-1].short_name)
          setCountry(det[len-2].long_name)
          setStat(det[len-3].long_name)
          setCity(det[len-4].short_name)
          
          console.log(det[len].long_name)
          setAdd1(det[0].long_name+det[1].long_name+det[2].long_name)
}
const iref=useRef()
const { isLoaded } = useJsApiLoader({
          id: 'google-map-script',
          googleMapsApiKey: 'AIzaSyA-yOjY6-NDpkMWFhSr2gC0UtZuyc69qXs',
          libraries:["places"]
        })
 
return (
    <>
  
   <div className="bg-white">
       <div  className="w-[300px]">    
    <h2 className="font-semibold text-md text-amber-800">SIGNUP</h2>
    <form  >
    <div className=" inline-flex">
      
    <div className="inline-block">
   {ffields.map((item,ind)=>(<div>
    <label className="  text-white ml-10 mt-2 p-1 w-200 h-30 
   rounded-lg bg-slate-800 text-sm ">{item==='address2'?'':item}</label>
    </div>))}
</div>
    <div  className='block'  >
    <input type='text'  key='name' placeholder="name"
    className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
    onChange={(e)=>setName(e.target.value)}
    required='true'
    ></input>
     
     <input type='email' key='email' placeholder={props.mail}
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

{ isLoaded &&  <StandaloneSearchBox
     onLoad={(ref)=>iref.current=ref}
     onPlacesChanged={handlePc}>
   <input
              type="text"
              placeholder='address'
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `340px`,
                height: `50px`,
                fontWeight:600,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `12px`,
                outline: `none`,
                textOverflow: `ellipses`,
                left: "50%",
                marginLeft: '30',
                textWrap:true
              }}/>
     </StandaloneSearchBox>}
     <input type='text' key='city' placeholder={city}
    className='ml-6 text-gray-950 p-2 text-sm h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
  required='true'
    ></input>
   <input type='text' key='stat' placeholder={stat}
    className='ml-6 text-gray-950 p-2 text-sm h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
  required='true'
    ></input>
   <input type='text' key='country' placeholder={country}
    className='ml-6 text-gray-950 p-2 text-sm h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
  required='true'
    ></input>
   <input type='text' key='pin' placeholder={pin}
    className='ml-6 text-gray-950 p-2 text-sm h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
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

/* 

  <Address  pc='address2'  onChange={(e)=>setAdd2(e.target.value)}/>
   <input  placeholder={city} 
     className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
   onChange={(e)=>setCity(e.target.value)}/>
   <input  placeholder={stat}
     className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
    />
   <input  placeholder={country} 
     className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
   onChange={(e)=>setCountry(e.target.value)}
    />
    
    <input type='text'  placeholder="pincode"
    className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
    onChange={(e)=>setPin(e.target.value)}
    required='true'
    ></input>*/