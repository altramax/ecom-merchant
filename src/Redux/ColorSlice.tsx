import { createSlice } from "@reduxjs/toolkit";

type initialStateTye = {
    mode: string;
}

const initialState: initialStateTye = {
    mode : ""
}

const ColorSlice = createSlice({
    name: "color",
    initialState,
    reducers:{
        lightmode:(state)=>{
           state.mode = "light"
        },
        darkmode: (state)=>{
            state.mode = "dark"
        }
    }
})

export const {lightmode, darkmode} = ColorSlice.actions;
export default ColorSlice.reducer