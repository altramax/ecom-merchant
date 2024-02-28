import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import ColorSlice from "./ColorSlice";
import AlertSlice from "./AlertSlice";
import StepForm from "./StepForm";

const rootReducer: any = combineReducers({
  color: ColorSlice,
  auth: AuthSlice,
  alert: AlertSlice,
  stepForm: StepForm,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
