import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action){
            state.push(action.payload);
        },
        deleteUser(state, action){
            const index = state.indexOf((user) => user.id === action.payload);
            state.splice(index,1);
        },
        removeAll(state, action){},
    }
});
export default userSlice.reducer;

export const {addUser} = userSlice.actions;
export const {deleteUser} = userSlice.actions;