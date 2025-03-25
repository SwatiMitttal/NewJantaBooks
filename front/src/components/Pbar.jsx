import { useEffect, useState } from "react"

function Pbar(){
    const [wid,setWid]=useState('')
    const [ptext,setPtext]=useState('')
    const fbar=()=>{
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 10;
            if (progress > 100) {
                progress = 100;
                clearInterval(interval);
            }
            setWid( `${Math.round(progress)}%`) 
                                 
            }, 1500);
    }
    useEffect(()=>{
       fbar()
    },[])
   return(<>
         <h4 className="text-sm font-semibold ml-10">{wid}</h4>
        <div className="h-5 w-5 ml-5 rounded-md bg-amber-500  duration-1000 ">
            
      </div>
 </>)
}

export default Pbar