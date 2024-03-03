import { createSlice } from "@reduxjs/toolkit";

type stepType = {
  stepOne: string;
  stepTwo: string;
};

const initialState: stepType = {
  stepOne: "",
  stepTwo: "",
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
    stepClear: (state) => {
      state.stepOne = "";
      state.stepTwo = "";
    },
  },
});

export const { stepOne, stepTwo, stepClear } = StepForm.actions;
export default StepForm.reducer;
