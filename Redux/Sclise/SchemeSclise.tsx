// redux/slices/schemeSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk to fetch scheme data
export const fetchSchemes = createAsyncThunk("schemes/fetchSchemes", async () => {
  const response = await axios.get("http://13.48.43.231:4000/api/scheme");
  return response.data; // Return the data to be stored in the Redux state
});

// Create slice of state for schemes
const schemeSlice = createSlice({
  name: "schemes",
  initialState: {
    schemes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchemes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSchemes.fulfilled, (state, action) => {
        state.loading = false;
        state.schemes = action.payload; // Set the fetched data into state
      })
      .addCase(fetchSchemes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle error
      });
  },
});

export default schemeSlice.reducer;
