import { Link } from "react-router-dom"
import LoginButton from './Login'
import Spanel from "./Spanel"
import Cartab from "./Cartab"
function Login1(){

return(<>

<Link  to='/' > <h2 className="font-semibold text-md text-amber-800 ml-20 hover:font-bold">HOME</h2></Link>  <br></br> 
    <div className="inline-flex">
         <div  className="w-[400px]">
          <LoginButton  />
    </div>
    <Spanel  />
    <Cartab  />
    </div>
</>)


}

export default Login1