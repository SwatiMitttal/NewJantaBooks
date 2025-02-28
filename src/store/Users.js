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
        
      aitems:[],
      cat:"bags"   

},
  reducers:{
   
   setU(state,action){
    const {name,email,passw,mobile,add1,add2,city,stat,country,pin,exist}=action.payload
    state.user=action.payload
     },

   setI(state,action){
    
    
    const {aitems}=action.payload
   
    state.aitems=action.payload
    
   
   },

   setC(state,action){
    
    state.cat=action.payload
  },

 


  }
}
)

export const {setI,setU,setC}=uslice.actions
export default uslice.reducer