import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
  collection,
  getDocs,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../Config/Config";

type productsType = {
  products: any;
};

const initialState: productsType = {
  products: null,
};

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const querySnapshot = await getDocs(collection(db, "Products"));

  let results: any = [];

  querySnapshot.forEach((doc) => {
    results.push(doc.data());
  });
  return results;
});

export const getProductCategory = createAsyncThunk(
  "getProductCategory",
  async (category: any) => {
    const categoryRef = doc(db, "Products", `${category}`);
    const docSnap = await getDoc(categoryRef);

    if (docSnap.exists()) {
      console.log(docSnap.data());
      return docSnap.data();
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
);

export const addProducts = createAsyncThunk(
  "addProducts",
  async (product: any) => {
    const productRef = doc(db, "Products", `${product.category}`);

    return await updateDoc(productRef, {
      items: arrayUnion(product),
    });
  }
);

export const deleteProducts = createAsyncThunk(
  "products",
  async (product: any) => {
    const productRef = doc(db, "Products", `${product.category}`);

    await updateDoc(productRef, {
      items: arrayRemove(product.id),
    });
  }
);

export const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      let results: any = [];

      action.payload?.forEach((products: any) => {
        products?.items?.filter((item: any) => item && results.push(item));
      });
      state.products = results;
    });

    builder.addCase(getAllProducts.rejected, (state) => {
      state.products = null;
    });

    builder.addCase(getProductCategory.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProductCategory.rejected, (state) => {
      state.products = null;
    });

    builder.addCase(addProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(addProducts.rejected, (state) => {
      state.products = null;
    });
  },
});

export default ProductsSlice.reducer;

// const submitHandler = useCallback(
//   (evt: any) => {
//     evt.preventDefault();
//     console.log("submit called");
//     //  const productData = {
//     //   id : `${uuidv4()}`,
//     //   name: fields.name,
//     //   description: fields.description,
//     //   price: fields.price,
//     //   quantity: fields.quantity,
//     //   discount: fields.discount,
//     //   nameOfDiscount: fields.nameOfDiscount,
//     //   category: fields.category,
//     //   images: imgLinks,
//     //   sizes: sizes,
//     //   gender: gender
//     //  }

//     // dispatch(addProducts(productData))
//   },
//   [dataHold.data]
// );
