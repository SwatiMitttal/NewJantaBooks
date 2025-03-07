
import './App.css'
import Aditem from './components/Aditem';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Fpage from './components/Fpage'
import { ToastContainer } from 'react-toastify';
import Order from './components/Order'
function App() {
  const url='http://localhost:4001'
  return (
   <>
   <ToastContainer />
   <BrowserRouter>
   <Routes>
   <Route  path='/'  element={<Fpage url={url}/>}></Route>
   <Route  path='/aitem' element={<Aditem url={url}/>}></Route>
    <Route  path='/orders'  element={<Order url={url} />}  ></Route>
   <Route  path='/list1' element={<Order url={url}/>}></Route>
   </Routes>
   </BrowserRouter>
   
   </>
  
  );
}

export default App;
