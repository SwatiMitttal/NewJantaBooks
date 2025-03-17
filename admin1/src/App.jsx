import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import List from './components/List'

import { ToastContainer } from 'react-toastify'
import Sidebar from './components/Sidebar'
function App()  {
  

  return (
    <>
    <div>
   
     <div className='inline-flex justify-items-start'>
    <img  src='../../newjanta.jpeg' className="h-10 w-10" ></img>  
     <h3 className='font-semibold'>Admin Panel</h3>
    </div>
    <hr></hr>
    <Sidebar/>
    
    <ToastContainer>
   </ToastContainer> 
   </div> 
    </>
  )
}

export default App
