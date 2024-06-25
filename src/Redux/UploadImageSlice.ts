import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage } from "../Config/Config";

type alertType = {
  images: {}[];
  loading: boolean[];
};

const initialState: alertType = {
  images: [
    { url: "", name: "" },
    { url: "", name: "" },
    { url: "", name: "" },
    { url: "", name: "" },
  ],
  loading: [false, false, false, false],
};

type uploadType = {
  file: any;
  position: any;
};

type deleteType = {
  name: any;
  position: any;
};

export const uploadImage = createAsyncThunk(
  "uploadimage",
  async (arg: uploadType) => {
    // console.log(arg.position);
    return new Promise<string>((resolve, reject) => {
      const storageRef = ref(storage, "images/" + arg.file?.name);
      const uploadTask = uploadBytesResumable(storageRef, arg.file);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              // console.log(downloadURL);
              resolve(downloadURL);
            })
            .catch(reject);
        }
      );
    });
  }
);

export const deleteImage = createAsyncThunk(
  "deleteimage",
  async (arg: deleteType) => {
    const deleteRef = ref(storage, `images/${arg.name}`);

    return await deleteObject(deleteRef);
  }
);

const UploadImageSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    clearImageSlice: (state) => {
      state.images = [
        { url: "", name: "" },
        { url: "", name: "" },
        { url: "", name: "" },
        { url: "", name: "" },
      ];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(uploadImage.fulfilled, (state, action) => {
      let position = action.meta.arg.position;
      state.images[position] = {
        url: action.payload,
        name: action.meta.arg.file.name,
      };
      state.loading[position] = false;
    });
    builder.addCase(uploadImage.pending, (state, action) => {
      let position = action.meta.arg.position;
      state.loading[position] = true;
    });
    builder.addCase(deleteImage.fulfilled, (state, action) => {
      let position = action.meta.arg.position;
      console.log("fired");
      state.images[position] = {
        url: "",
        name: "",
      };
    });
  },
});

export const { clearImageSlice } = UploadImageSlice.actions;
export default UploadImageSlice.reducer;
