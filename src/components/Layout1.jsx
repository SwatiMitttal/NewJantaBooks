import { Outlet } from "react-router-dom"
import Header from "./Header"
import Cartab from './Cartab'

import { useSelector } from "react-redux"
function Layout1(){

    const citems=useSelector(store=>store.cart.items)
    return(
    
          <div className="bg-white">
         <div  className="w-[800px]">
         <Header/>
         <Outlet/>
         </div>
        <Cartab items={citems}/>
    </div>

    
    )
}

export default Layout1