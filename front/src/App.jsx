import {Route,Routes,BrowserRouter}  from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'
import Login1 from './components/Login1'
import Signup from './components/Signup '
import Home1 from './components/Home1'
import Total from './components/Total'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {ToastContainer,toast} from 'react-toastify'
import List from './components/List'
import Aitem from './components/Aitem'
import Nform from './components/Nform'
import Rangk from './components/Rangk'
//import Details from './components/Details'
function App() {

const url='https://newjvite3.onrender.com'

const [aitems,setAitems]=useState([])

  useEffect(()=>{
   try{
         const res=  axios.get(`${url}/items`)
            if(res.status===200)
              { setAitems(res.data.data)
                
               toast(res.data)
}
            }catch(err){
        console.log(err.message)
      }},[])

  return (
    <div className="App">
         <h3 className='text-red-900 text-xl inline-flex  text-lg-center ml-100'>NEW JANTA BOOKS & STATIONERS</h3>
    <ToastContainer/>
    <BrowserRouter>
  <Routes>
      <Route   path='/' element={<Home url={url} />}>  </Route>
      <Route   path='/home1' element={<Home1 url={url}/>} ></Route>
      <Route index  element={<Home/>}></Route>
      <Route  path='/:slug' element={<Detail/>}></Route>
      <Route  path='/home1/:slug' element={<Detail/>}  ></Route>
      <Route path='/login'  element={<Login1/>}  ></Route>
      <Route path='/home1/login'  element={<Login1 url={url}/>}  ></Route>
      <Route   path='/list'  element={<List />} ></Route>
      <Route   path='/admin'  element={<Aitem url={url}/>} ></Route>
      <Route   path='/nform'  element={<Nform url={url}/>} ></Route>
      <Route  path='/rangk'  element={<Rangk/>}  ></Route>
      <Route   path='/signup'  element={<Signup url={url}/>} ></Route>
      <Route   path='/totamt'  element={<Total url={url}/>}  ></Route>
      </Routes>
      
      </BrowserRouter> 
      </div>
  )
}

export default App


