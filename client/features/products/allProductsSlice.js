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
    });
  },
});

export const selectAllProducts = (state) => {
  return state.products.productList;
};

export default allProductsSlice.reducer;
