
import {createSlice}  from  '@reduxjs/toolkit'
export const cslice=createSlice(
    
    {
      name:'cart',
      initialState:{
        items:[],
        totq:0,
        statuss:false,
        totamt:0,
        temp:0,
      },
      reducers: {
      addItem(state,action){
        const {id,quantity,price,cbot,imgurl,img2,slug,rating,disc}=action.payload
         const item=state.items.find(item=>item.id===id)
         const ind=state.items.findIndex(item=>item.id===id)
         let item1={id:id,quantity:quantity,price:price,imgurl:imgurl,img2:img2,rating:rating,slug:slug,cbot:cbot,disc:disc}
         let tt=price*quantity
        !item  ?  state.items.push({id:id,quantity:quantity,price:price,imgurl:imgurl,cbot:cbot,rating:rating,slug:slug,img2:img2,tamt:tt,disc:disc}) :item.cbot>0?console.log(''):item.quantity++
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
      },}})


export const {addItem,remItem,changeQ}=cslice.actions
export default cslice.reducer