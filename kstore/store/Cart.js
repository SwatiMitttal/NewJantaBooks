
import {createAsyncThunk, createSlice}  from  '@reduxjs/toolkit'
import axios from 'axios'
export const fitems=createAsyncThunk("fitems",async ()=>{
  const res=await axios.get('https://newjvite3.onrender.com/items')
     if(res.status===200){
      return res.data
     }
  
})

export const cslice=createSlice(
    {  name:'cart',
        initialState:{
        items:[],
        totq:0,
        statuss:false,
        totamt:0,
        temp:0,},
      extraReducers:builder=> {
      builder.addCase(fitems.fulfilled,(state,action)=>{
             let t=[]
             t=action.payload
              state.items=t
            
      }),
      builder.addCase(fitems.rejected,(state,action)=>{
             
      })},
      
     reducers: {addItem(state,action){
        const {id,quantity,price,cbot,imgurl,img,slug,rating,disc}=action.payload
         const item=state.items.find(item=>item.id===id)
         const ind=state.items.findIndex(item=>item.id===id)
         let item1={id:id,quantity:quantity,price:price,imgurl:imgurl,img:img,rating:rating,slug:slug,cbot:cbot,disc:disc}
         let tt=price*quantity
        !item  ?  state.items.push({id:id,quantity:quantity,price:price,imgurl:imgurl,cbot:cbot,rating:rating,slug:slug,img:img,tamt:tt,disc:disc}) :item.cbot>0?console.log(''):item.quantity++
         state.totamt+=tt
      },

    changeQ(state,action){
        const{id,quantity,price}=action.payload
        const ind=state.items.findIndex(item=>item.id===id)
      
        quantity===0? state.items=state.items.filter(item=>item.id!==id): state.items[ind].quantity=quantity
       if (quantity>0){
        state.temp=state.items[ind].tamt
        state.items[ind].tamt=price*quantity
       
        state.totamt+=(state.items[ind].tamt-state.temp)}
      }
    }
      })


export const {addItem,remItem,changeQ}=cslice.actions
export default cslice
//export  cslice.extraReducers
    