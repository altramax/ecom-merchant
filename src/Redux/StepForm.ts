import { createSlice } from "@reduxjs/toolkit";

type stepType = {
  stepOne: string;
  stepTwo: string;
  skipForNow: string;
};

const initialState: stepType = {
  stepOne: "",
  stepTwo: "",
  skipForNow: "false",
};

const StepForm = createSlice({
  name: "stepform",
  initialState,
  reducers: {
    stepOne: (state, action) => {
      state.stepOne = action.payload;
    },
    stepTwo: (state, action) => {
      state.stepTwo = action.payload;
    },
    skipForNow: (state, action) => {
      state.skipForNow = action.payload;
    },
    stepClear: (state) => {
      state.stepOne = "";
      state.stepTwo = "";
    },
  },
});

export const { stepOne, stepTwo, skipForNow, stepClear } = StepForm.actions;
export default StepForm.reducer;
