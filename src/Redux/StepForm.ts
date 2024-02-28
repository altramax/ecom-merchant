import { createSlice } from "@reduxjs/toolkit";

type stepType = {
  stepone: string;
  steptwo: string;
};

const initialState: stepType = {
  stepone: "ddd",
  steptwo: "ddd",
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
    }
  },
});

export const { stepOne, stepTwo} = StepForm.actions
export default StepForm.reducer;