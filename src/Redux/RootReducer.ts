import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import ColorSlice from "./ColorSlice";
import AlertSlice from "./AlertSlice";
import StepForm from "./StepForm";
import ProductsSlice from "./ProductsSlice"
import UploadImageSlice from "./UploadImageSlice"

const rootReducer: any = combineReducers({
  color: ColorSlice,
  auth: AuthSlice,
  alert: AlertSlice,
  stepForm: StepForm,
  products: ProductsSlice,
  imageUpload: UploadImageSlice,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
