import '../../src/App.css';

 

function Car1(){
    const imgs=['../../bottles/bot1.jpeg','../../sbag/sbag2.jpeg','../../bottles/bot1.jpeg','../../bottles/bot2.jpeg','../../toys/toy1.jpeg','../../toys/toy2.jpeg']
    return(
        <>
        
       
     <div  id= 'div10' className='inline-flex mt-20 border-2 border-red-800 rounded-md hover:scale-150' >   
     <img   id='img1' alt='img1'  src='../../bottles/bot1.jpeg' className='rounded-md h-1/4 w-40' />  
   <img   id='img2' alt='img2'  src='../../sbag/sbag1.jpeg' className='rounded-md h-1/4 w-40' />
   <img   id='img3' alt='img3'  src='../../toys/toy1.jpeg' className='rounded-md h-1/2 w-40'  />
    <img   id='img4' alt='img3'  src='../../toys/toy2.jpeg' className='rounded-md h-1/2 w-40'  />
  
   </div>  
     </>

    )}
export default Car1