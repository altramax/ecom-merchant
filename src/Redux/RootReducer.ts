import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import ColorSlice from "./ColorSlice";

 const rootReducer:any = combineReducers({
color: ColorSlice,
auth: AuthSlice
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;