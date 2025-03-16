import {Route,Routes,BrowserRouter}  from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'

import Login from './components/Login'
import Signup from './components/Signup '

import Home1 from './components/Home1'
import Total from './components/Total'
import Orders  from './components/Orders'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {ToastContainer} from 'react-toastify'
function App() {

const url='https://newjvite1.onrender.com'

const [aitems,setAitems]=useState([])

  useEffect(()=>{
   try{
         const res=  axios.get(`${url}/items`)
            if(res.status===200)
              { setAitems(res.data.data)
               alert(res.data)
             }
            }catch(err){
        console.log(err.message)
      }},[])

  return (
    <div className="App">
         <h3 className='text-red-900 text-xl inline-flex  text-lg-center'>NEW JANTA BOOKS & STATIONERS</h3>
    <ToastContainer/>
    <BrowserRouter>
  <Routes>
      <Route   path='/' element={<Home url={url} />}>  </Route>
      <Route   path='/home1' element={<Home1 url={url}/>} ></Route>
      
      <Route index  element={<Home/>}></Route>
      <Route  path='/:slug' element={<Detail/>}></Route>
      <Route  path='/home1/:slug' element={<Detail/>}  ></Route>
      <Route path='/login'  element={<Login/>}  ></Route>
      <Route path='/home1/login'  element={<Login url={url}/>}  ></Route>
    
      <Route   path='/signup'  element={<Signup url={url}/>} ></Route>
      <Route   path='/totamt'  element={<Total/>}  ></Route>
      <Route path='/orders'  element= {<Orders/>}></Route>
     
      </Routes>
      
      </BrowserRouter> 
      </div>
  )
}

export default App


