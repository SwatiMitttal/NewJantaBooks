import { useEffect,useState } from "react"
import axios from "axios"
function Nitem(props){
    const [flag,setFlag]=useState('adding item..')
    async function handleS() {
        const fdata=new FormData()
        const files=[]
        files[0]=props.img
        files[1]=props.img2
    
        fdata.append('file',props.img)
         fdata.append('slug',props.data.name)
           fdata.append('note',props.data.note)
           fdata.append('price',props.data.price)
           fdata.append('rating',props.data.rating)
           fdata.append('cat',props.cat)
           fdata.append('url2',props.url2)
           fdata.append('disc',props.data.discount)
           fdata.append('cbot',props.data.count)
           fdata.append('url',props.url)
           console.log(fdata)
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