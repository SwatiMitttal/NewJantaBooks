
import { useRef } from "react"
import { StandaloneSearchBox ,useJsApiLoader} from "@react-google-maps/api"
function Address(props){
    const handlePc=()=>{
        let add=iref.current.getPlaces()
        console.log(add)
     }
      const iref=useRef()
    const { isLoaded } = useJsApiLoader({
              id: 'google-map-script',
              googleMapsApiKey: 'AIzaSyA-yOjY6-NDpkMWFhSr2gC0UtZuyc69qXs',
              libraries:["places"]
            })
return(<>
 <div className="inline-flex">
         <div  className="w-[200px]">
  
       { isLoaded &&  <StandaloneSearchBox
     onLoad={(ref)=>iref.current=ref}
     onPlacesChanged={props.handlePc}>
   <input
              type="text"
              placeholder={props.pc}
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `50px`,
                fontWeight:600,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `12px`,
                outline: `none`,
                textOverflow: `ellipses`,
                left: "50%",
                marginLeft: '30',
                textWrap:true
              }}/>
     </StandaloneSearchBox>}
     </div></div>
</>)}

export default Address

