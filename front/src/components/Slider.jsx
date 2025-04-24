import {SimpleImageSlider}  from 'react-simple-image-slider'
function Slider(props){
   
    return(
        <>
        <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={props.images}
        showBullets={true}
        showNavs={true}
      />
    </div>
        </>
    )


    
}

export default Slider