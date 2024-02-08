import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import ColorSlice from "./ColorSlice";
import AlertSlice from "./AlertSlice";

 const rootReducer:any = combineReducers({
color: ColorSlice,
auth: AuthSlice,
alert: AlertSlice
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;