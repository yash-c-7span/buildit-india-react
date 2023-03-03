import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
    name:'toggle',
    initialState:{
        navbar:false,
    },
    reducers:{
        toggleData:(state, action) => {
            if(action.payload === "NAVBAR") {
                state.navbar = !state.navbar;
            }
        }
    }
})

export const { toggleData } = toggleSlice.actions
export default toggleSlice.reducer;