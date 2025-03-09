import {Route,Routes,BrowserRouter}  from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'
import Car1 from './components/Car1'
import Login from './components/Login'
import Signup from './components/Signup '

import Home1 from './components/Home1'
import Total from './components/Total'
import { useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { setI } from './store/Users'
import { prods1 } from './assets/prods1'
import {ToastContainer} from 'react-toastify'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCxc9KzusxGI-nRosT51eB5u3GNwb5Pdv8",
    authDomain: "newj-74558.firebaseapp.com",
    projectId: "newj-74558",
    storageBucket: "newj-74558.firebasestorage.app",
    messagingSenderId: "922044641902",
    appId: "1:922044641902:web:71ff60237cd963ab6fec7f",
    measurementId: "G-603M5XPBZ9"
  }
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)

const dispatch=useDispatch()
const [aitems,setAitems]=useState([])
const url='http://localhost:4001' || URL
const citems=prods1
  useEffect(()=>{
   try{
           axios.get(`${url}/items`).then(
            res=> {if(res.status===200)
              { setAitems(res.data)
                dispatch(setI({aitems:aitems}));
               localStorage.setItem('aitems',JSON.stringify(res.data))
             }}).then(
              data=>{
            })}catch(err){
        console.log(err.message)
      }
    !aitems.length>0  ?setAitems(prods1):console.log(citems.length)
    !aitems.length>0  ?localStorage.setItem('aitems',prods1):console.log(citems.length)
    },[])

  return (
    <div className="App">
         <h3 className='text-red-900 text-xl inline-flex  text-lg-center'>NEW JANTA BOOKS & STATIONERS</h3>
    <ToastContainer/>
    <BrowserRouter>
  <Routes>
      <Route   path='/' element={<Home url={url}/>}>  </Route>
      <Route   path='/home1' element={<Home1 url={url}/>} ></Route>
      <Route  path='/car1'   element={<Car1/>}></Route>
      <Route index  element={<Home/>}></Route>
      <Route  path='/:slug' element={<Detail/>}></Route>
      <Route  path='/home1/:slug' element={<Detail/>}  ></Route>
      <Route path='/login'  element={<Login url={url}/>}  ></Route>
      <Route path='/home1/login'  element={<Login/>}  ></Route>
      
      <Route   path='/signup'  element={<Signup/>} ></Route>
      <Route   path='/totamt'  element={<Total/>}  ></Route>
           
      </Routes>
      
      </BrowserRouter> 
      </div>
  )
}

export default App


