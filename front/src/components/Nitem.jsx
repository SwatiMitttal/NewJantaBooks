import { useEffect,useState } from "react"
import axios from "axios"
function Nitem(props){
    const [flag,setFlag]=useState('adding item..')
    async function handleS() {
        const fdata=new FormData()
        const files=[]
        files[0]=props.img
        files[1]=props.img2
    
        fdata.append('files',files)
        fdata.append('imgurl',props.data.image)

           fdata.append('slug',props.data.name)
           fdata.append('note',props.data.note)
           fdata.append('price',props.data.price)
           fdata.append('rating',props.data.rating)
           fdata.append('cat',props.cat)
           fdata.append('disc',props.data.discount)
           fdata.append('url',props.url)
          const res=await axios.post('http://localhost:4007/aitems',fdata)
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