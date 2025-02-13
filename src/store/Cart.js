import {createSlice}  from  '@reduxjs/toolkit'
import { prods1} from '../assets/prods1'

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
        const {id,quantity,price,imgUrl}=action.payload
        const item=state.items.find(item=>item.id===id)
        
       
        !item  ?  state.items.push({id:id,quantity:quantity,price:price,imgUrl:imgUrl})  :item.quantity++
        
        const item1=prods1.filter(item=>item.id===id)[0]
        
        
        state.tamt[id]=item1.price*quantity
        state.totamt+=state.tamt[id]
      },

      remItem(state,action){
        const item=state.items.filter(item=>item.id==action.payload.id)
          item.quantity--;
          if (item.quantity==0){
            const arr=state.items.filter(item=>item.id!=action.payload.id)
            state.items=arr
          }
      },

      changeQ(state,action){
        const{id,quantity}=action.payload
        const ind=state.items.findIndex(item=>item.id===id)

        if (quantity>0){
          state.items[ind].quantity=quantity
        }else{
            state.items=state.items.filter(item=>item.id!==id)
        }
        const item1=prods1.filter(item=>item.id===id)[0]
        state.temp=state.tamt[id]
        state.tamt[id]=item1.price*quantity
        state.totamt+=(state.tamt[id]-state.temp)
        
      },
        
      toggleS(state,action){
        state.statuss?  state.statuss=false : state.statuss=true
        
      },
     
        }
    })


export const {addItem,remItem,changeQ,toggleS}=cslice.actions
export default cslice.reducer