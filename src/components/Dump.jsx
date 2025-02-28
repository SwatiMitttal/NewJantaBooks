
import Popup from "reactjs-popup/dist/index"
function Dump(){
    return(
        <>
        <Popup 
        trigger={<h4 className='font-semibold text-amber-800 text-md hover:scale-105'>ADDITEM</h4>} position='right-center'>
          
                    <div className=' text-sm font-semibold text-amber-900'> Enter Password</div>
                    <input  className=' h-20 text-sm font-semibold 
                    rounded-md bg-amber-200 text-amber-800 border-2 border-amber-800' type='password'
                    onClick={(e)=>{e.target.value==='deepti'?nav('/aitem'):alert('Enter correct password')}}
                    ></input>
    
       </Popup>
        </>
    )
    }
export default Dump