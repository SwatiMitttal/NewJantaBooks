
import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

function Fpage(){
    const nav=useNavigate()
    const handleC=(e)=>{
     e.target.value==='madmin'?nav('/aitem')  :nav('/')
    }

    return(
        <>
        <Navbar/>
        <Sidebar/>
       
        </>
    )
}

export default Fpage