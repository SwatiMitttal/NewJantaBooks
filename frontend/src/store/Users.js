import {createSlice}  from  '@reduxjs/toolkit'
export const uslice=createSlice(
    
    {
      name:'users',
      initialState:{
        
        user:''
      },
      reducers: {
      setU(state,action){
        
        const { name,passw,mobile,email, add1,add2,city,stat,country,pin,newu}=action.payload
        const user1={name:name,passw:passw,mobile:mobile,email:email, add1:add1,add2:add2,city:city,stat:stat,country:country,pin:pin,newu:newu}
        state.user=user1
      },}
    })


export const {setU}=uslice.actions
export default uslice.reducer