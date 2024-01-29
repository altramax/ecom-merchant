import { combineReducers } from "@reduxjs/toolkit";
import ColorSlice from "./ColorSlice";

 const rootReducer:any = combineReducers({
color: ColorSlice
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;