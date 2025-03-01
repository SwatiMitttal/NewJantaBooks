

import { configureStore } from "@reduxjs/toolkit"
import {cslice} from "./Cart"
import { uslice } from "./Users"
const appStore=configureStore(
    {
       reducer:{
        cart:cslice.reducer,
        users:uslice.reducer
       }
    }
)

export default appStore