import { createSlice } from "@reduxjs/toolkit";

type initialStateTye = {
    mode: string;
}

const initialState: initialStateTye = {
    mode : "light"
}

const ColorSlice = createSlice({
    name: "color",
    initialState,
    reducers:{
        lightmode:(state)=>{
           state.mode = "light"
           console.log("called Light");
        },
        darkmode: (state)=>{
            state.mode = "dark"
           console.log("called dark");

        }
    }
})

export const {lightmode, darkmode} = ColorSlice.actions;
export default ColorSlice.reducer