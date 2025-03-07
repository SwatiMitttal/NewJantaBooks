import {Route,Routes,BrowserRouter}  from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'
import Car1 from './components/Car1'
import Login from './components/Login'
import Signup from './components/Signup '

import Home1 from './components/Home1'
import Total from './components/Total'
import Orders  from './components/Orders'
import { useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { setI } from './store/Users'
import { prods1 } from './assets/prods1'
function App() {


const dispatch=useDispatch()
const [aitems,setAitems]=useState([])
const citems=prods1
  useEffect(()=>{
   try{
           axios.get('http://localhost:4001/items').then(
            res=> {if(res.status===200)
              { setAitems(res.data)
                dispatch(setI({aitems:aitems}));
               localStorage.setItem('aitems',JSON.stringify(res.data))
             }}).then(
              data=>{
            }
            
            )}catch(err){
        console.log(err.message)
      }
    !aitems.length>0  ?setAitems(prods1):console.log(citems.length)
    !aitems.length>0  ?localStorage.setItem('aitems',prods1):console.log(citems.length)
    },[])

  return (
    <div className="App">
         <h3 className='text-red-900 text-xl inline-flex  text-lg-center'>NEW JANTA BOOKS & STATIONERS</h3>
    <BrowserRouter>
  <Routes>
      <Route   path='/' element={<Home />}>  </Route>
      <Route   path='/home1' element={<Home1/>} ></Route>
      <Route  path='/car1'   element={<Car1/>}></Route>
      <Route index  element={<Home/>}></Route>
      <Route  path='/:slug' element={<Detail/>}></Route>
      <Route  path='/home1/:slug' element={<Detail/>}  ></Route>
      <Route path='/login'  element={<Login/>}  ></Route>
      <Route path='/home1/login'  element={<Login/>}  ></Route>
      
      <Route   path='/signup'  element={<Signup/>} ></Route>
      <Route   path='/totamt'  element={<Total/>}  ></Route>
      <Route path='/orders'  element= {<Orders/>}></Route>
     
      </Routes>
      
      </BrowserRouter> 
      </div>
  )
}

export default App


