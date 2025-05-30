import { configureStore } from '@reduxjs/toolkit'
import { uslice } from './Users'
import { cslice } from './Cart'

const appStore=configureStore({
   reducer:{
     cart:cslice.reducer,
     users:uslice.reducer
   }
      

})

export default appStore