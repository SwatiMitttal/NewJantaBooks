import { useEffect,useState } from "react"
import axios from "axios"
function Nitem(props){
    const [flag,setFlag]=useState('adding item..')
    async function handleS() {
        const fdata=new FormData()
       
        fdata.append('img',props.img)
        fdata.append('imgurl',props.data.image)
           fdata.append('slug',props.data.name)
           fdata.append('note',props.data.note)
           fdata.append('price',props.data.price)
           fdata.append('rating',props.data.rating)
           fdata.append('cat',props.cat)
           fdata.append('disc',props.data.discount)
         
          const res=await axios.post('https://newjvite3.onrender.com/aitems',fdata)
            if(res.status===200){
                setFlag('item added')}
              }

        useEffect(()=>{
            handleS()

        },[])
    return(
        <>
        <p className="font-semibold">{flag}</p>
        
        </>
    )

}

export default Nitem