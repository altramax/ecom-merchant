import { createSlice } from "@reduxjs/toolkit";

type stepType = {
  stepone: string;
  steptwo: string;
};

const initialState: stepType = {
  stepone: "",
  steptwo: "",
};

const StepForm = createSlice({
  name: "stepform",
  initialState,
  reducers: {
    stepOne: (state, action) => {
      state.stepone = action.payload;
    },
    stepTwo: (state, action) => {
      state.steptwo = action.payload;
    },
    stepClear: (state) => {
      state.stepone = "";
      state.steptwo = "";
    },
  },
});

export const { stepOne, stepTwo, stepClear } = StepForm.actions;
export default StepForm.reducer;
