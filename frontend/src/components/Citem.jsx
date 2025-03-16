

function Citem(props){
   const {imgurl,price,quantity}=props.data
    return(<>
    <div  className="grid grid-cols-2 gap-3" >
      <div className="inline-flex">
        <img className="h-10 w-10 " ></img>
      </div>
    </div>
    </>)
}

export default Citem