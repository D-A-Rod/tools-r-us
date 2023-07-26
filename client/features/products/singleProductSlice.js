import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchSingleProductAsync = createAsyncThunk(
  "singleProduct/fetchSingleProductAsync",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/singleProduct/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProductAsync.fulfilled, (state, action) => {
      console.log("Action payload:", action.payload);
      console.log("Updated singleProduct state:", state);
      return action.payload;
    });
  },
});

export const selectSingleProduct = (state) => {
  console.log("this is SelectSingleProduct", state);
  return state.singleProduct;
};

export default singleProductSlice.reducer;
