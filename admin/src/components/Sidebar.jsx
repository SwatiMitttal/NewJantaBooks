
import {FaPlus,FaGift,FaList} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Sidebar(){

    return(
        <>
        <div id='sidebar' className='h-min border-2 w-2/12'>
         <div  id='sb1' className=' mt-5 ml-3 mb-5 flex-col gap-3' >
          <Link to='/aitem'> <div id ='sb2'className='inline-flex  hover:scale-105 border-2 hover:bg-red-100 w-full mb-3  border-gray-400  p-1 ' >
               <FaPlus/>
               <p className='text-sm ml-2 '>Add items</p>
            </div></Link> <hr></hr>
         <Link  to='/list1' >   <div id ='sb3' className='inline-flex nb-3 hover:scale-105 hover:bg-red-100 w-full border-2 border-gray-400   mb-3 p-1 '>
               <FaGift/>
               <p className='text-sm ml-2'>Orders</p>
            </div><hr></hr></Link>
          <Link to='/orders' ><div id ='sb4' className='inline-flex hover:scale-105 hover:bg-red-100 w-full border-2 mb-3 p-1 border-gray-400 '>
               <FaList/>
               <p className='text-sm ml-2 '>List Orders-Enter email</p>
            </div></Link> 
            </div>
        </div>
        </>
    )
}

export default Sidebar