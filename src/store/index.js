import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import userSlice from "./slices/userSlice";


const store = configureStore({
    reducer: {
        users: userSlice,
        products: productSlice
    }
})

export default store;