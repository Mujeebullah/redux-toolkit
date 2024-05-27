import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addProduct(state, action){},
        deleteProduct(state, action){},
        deleteAll(state, action){}
    }
})

export default productSlice.reducer;