
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
        tamt:{}
      },
      reducers: {
      addItem(state,action){
        const {id,quantity,price,cbot,imgurl,img,slug,rating}=action.payload
         const item=state.items.find(item=>item.id===id)
         
         const item1={id:id,quantity:quantity,price:price,imgurl:imgurl,img:img,rating:rating,slug:slug,cbot:cbot}
        !item  ?  state.items.push({id:id,quantity:quantity,price:price,imgurl:imgurl,cbot:cbot,rating:rating,slug:slug,img:img})  :item.cbot>0?item=item1:item.quantity++
        state.tamt[id]=price*quantity
        state.totamt+=state.tamt[id]
      },

      remItem(state,action){
        const item=state.items.filter(item=>item.id===action.payload.id)
          item.quantity--;
          if (item.quantity===0){
            const arr=state.items.filter(item=>item.id!==action.payload.id)
            state.items=arr
          }
      },

      changeQ(state,action){
        const{id,quantity}=action.payload
        const ind=state.items.findIndex(item=>item.id===id)
        const aitems=localStorage.getItem('aitems')
        if (quantity>0){
          state.items[ind].quantity=quantity
        }else{
            state.items=state.items.filter(item=>item.id!==id)
        }
        
        const item1=aitems.filter(item=>item.id===id)[0]
        state.temp=state.tamt[id]
        state.tamt[id]=item1.price*quantity
        state.totamt+=(state.tamt[id]-state.temp)
        
      },

      
    
     
        }
    })


export const {addItem,remItem,changeQ}=cslice.actions
export default cslice.reducer