import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';


let appStore = configureStore({  //building store

    reducer: {
        cart: cartReducer // creating slice
    }
})


export default appStore;