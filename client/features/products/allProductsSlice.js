import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productList: null,
};

export const fetchAllProductsAsync = createAsyncThunk(
  "products/fetchAllProductsAsync",
  async () => {
    try {
      const { data } = await axios.get("/api/products");
      console.log("fetched all products", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const allProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
      state.productList = action.payload;
      // console.log("ACTION payload", action.payload);
      // return action.payload
    });
  },
});

export const selectAllProducts = (state) => {
  console.log("this is state from allProducts Slice", state);
  return state.products.productList;
};

export default allProductsSlice.reducer;
