import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import ColorSlice from "./ColorSlice";
import AlertSlice from "./AlertSlice";
import StepForm from "./StepForm";
import AllProductsSlice from "./AllProductsSlice";

const rootReducer: any = combineReducers({
  color: ColorSlice,
  auth: AuthSlice,
  alert: AlertSlice,
  stepForm: StepForm,
  allProducts: AllProductsSlice
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
