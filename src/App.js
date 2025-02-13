import {Route,Routes,BrowserRouter}  from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'
import Car1 from './components/Car1'
import Login from './components/Login'
import Signup from './components/Signup '
import Aitem from './components/Aitem'
import Home1 from './components/Home1'
import Total from './components/Total'
import Orders  from './components/Orders'
import {io} from 'socket.io-client'
import { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app"
function App() {
const [socket,setSocket]=useState(null)
const [user,setUser]=useState(localStorage.getItem('user'))
 

const firebaseConfig = {
  apiKey: "AIzaSyDpVySRh3_e30NBM-3GZtL_s-kL7uiWRiM",
  authDomain: "newjanta-b67af.firebaseapp.com",
  projectId: "newjanta-b67af",
  storageBucket: "newjanta-b67af.firebasestorage.app",
  messagingSenderId: "230938568199",
  appId: "1:230938568199:web:a913c4f84222b28b842ca2",
  measurementId: "G-7H7F6EV41M"
};


//const app = initializeApp(firebaseConfig);


/*useEffect(()=>{
   const socket=io('http://localhost:4010')
   console.log(socket)
 },[])

 useEffect(()=>{
  user && socket.emit('nuser',user)
 },[socket,user])
 */
 
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
      <Route  path='/aitem' element={<Aitem/>}  ></Route>
      <Route   path='/signup'  element={<Signup/>} ></Route>
      <Route   path='/totamt'  element={<Total/>}  ></Route>
      <Route path='/orders'  element= {<Orders/>}></Route>
     
      </Routes>
      
      </BrowserRouter> 
      </div>
  )
}

export default App


