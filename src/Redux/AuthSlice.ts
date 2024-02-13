import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile
} from "firebase/auth";
import { auth, googleprovider } from "../Config/Config";
import { successful } from "./AlertSlice";

// Define a type for the slice state
interface valueState {
  userId: string | null;
  message: string | null; 
  emailVerified: boolean;
  profileCompleted: boolean;
}

// Define the initial state using that type
const initialState: valueState = {
  userId: null,
  message: null,
  emailVerified: false,
  profileCompleted: false
};

type propsType = {
  email: string;
  password: string;
};

type signUptype = {
  email: string;
  password: string;
  storeName: string;
}

export const createUser = createAsyncThunk(
  "newUser/signin",
  async (arg: signUptype, {dispatch}) => {
    const { email, password, storeName } = arg;
    let user = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser,{displayName: storeName}) .then(()=> sendEmailVerification(user.user))
    // await   sendEmailVerification(user.user)
    return user;
  }
);

export const userLogin = createAsyncThunk("email/signin", async(arg: propsType, {dispatch})=>{
  const {email, password} = arg;
  const user = await signInWithEmailAndPassword(auth, email, password);
  // dispatch(successful())
  console.log(user);
  return user
})

export const googleLogin = createAsyncThunk("google/sigin", async(arg, {dispatch})=>{
  let user = await signInWithPopup(auth, googleprovider);
  dispatch(successful())
  return user
})

export const logOut = createAsyncThunk("Signout", async(arg,{dispatch})=>{
  let user = await signOut(auth);
  dispatch(successful())
  return user
})



export const UserAuthSlice = createSlice({
  name: "UserAuth",
  initialState,
  reducers: {
    resetErrorMessage : (state)=>{
      state.message = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.userId = action.payload.user.uid;
      state.message = "Request Successful";
      state.emailVerified = action.payload.user.emailVerified;
      console.log(action.payload.user.emailVerified);
    });
    builder.addCase(createUser.rejected, (state) => {
      state.userId = null;
      state.message = "Request Failed";
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      console.log(action);
      state.userId = action.payload.user.uid;
      state.message = "Request Successful";
      state.emailVerified = action.payload.user.emailVerified;
      console.log(action.payload.user.emailVerified);
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      console.log(action);
      state.userId = null;
      state.message = "Request Failed";
    });
    builder.addCase(googleLogin.fulfilled, (state, action) => {
      state.userId = action.payload.user.uid;
      state.message = "Request Successful";
      state.emailVerified = action.payload.user.emailVerified;
      console.log(action.payload.user.emailVerified);
    });
    builder.addCase(googleLogin.rejected, (state) => {
      state.userId = null;
      state.message = "Request Failed";
    });
    builder.addCase(logOut.fulfilled, (state) => {
      state.userId = null;
      state.message = "";
    });
    builder.addCase(logOut.rejected, (state) => {
      state.userId = null;
      state.message = "Request Failed";
    });
  },
});

export const { resetErrorMessage } = UserAuthSlice.actions;
export default UserAuthSlice.reducer;
