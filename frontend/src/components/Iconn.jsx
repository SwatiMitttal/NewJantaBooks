
import  {FaGifts,FaBriefcase,FaSmile,FaAmazonPay,FaPaypal} from 'react-icons/fa'
function Iconn(){
    return(
    <>
    <br></br>
      <div className='inline-flex '>
       <span className='h-70 w-70 rounded-full bg-yellow-600 hover:bg-amber-400 hover:scale-105 justify-center items-center p-12 font-semibold'><FaGifts className='items-center'/> birthday gifting</span>
        <p className='justify-center items-center font-semibold'> </p>

        <span className='h-70 w-70 rounded-full bg-yellow-600 hover:bg-amber-400  hover:scale-105 justify-center items-center p-12 font-semibold'><FaBriefcase className='items-center'/> shipped in 2-3 days</span>
        <p className='justify-center items-center font-semibold'> </p>

        <span className='h-70 w-70 rounded-full bg-yellow-600  hover:bg-amber-500 hover:scale-105 justify-center items-center p-12 font-semibold'><FaSmile className='items-center'/> happy children happy moms</span>
        <p className='justify-center items-center font-semibold'> </p>
        
        <span className='h-70 w-70  inline-flex
        rounded-full bg-yellow-600  hover:bg-amber-500 hover:scale-105 justify-center items-center p-12 font-semibold'><FaPaypal/><FaAmazonPay className='items-center'/> mutliple payment modes</span>
        <p className='justify-center items-center font-semibold'> </p>
      
      </div>
    </>
    )
}

export default Iconn