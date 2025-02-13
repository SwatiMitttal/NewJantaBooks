import { createSlice } from "@reduxjs/toolkit"

export const uslice=createSlice({
    name:"users",
    initialState:{
        user:{
          name:'',
          email:'',passw:'',
          mobile:'',add1:'',add2:'',
          city:'',stat:'',country:'',pin:'',exist:false
        },
        
        

},
  reducers:{
   
   setU(state,action){
    const {name,email,passw,mobile,add1,add2,city,stat,country,pin,exist}=action.payload
    state.user=action.payload
     alert(name)
        
        
      
   }



  }
}
)

export const {addUser,setU}=uslice.actions
export default uslice.reducer