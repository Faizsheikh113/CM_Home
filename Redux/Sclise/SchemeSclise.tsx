import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching schemes
export const fetchSchemes = createAsyncThunk("schemes/fetch", async () => {
  const response = await axios.get("http://16.171.21.224:4000/api/scheme");
  console.log(response.data);
  return response.data;
});

const schemesSlice = createSlice({
  name: "schemes",
  initialState: { schemes: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchemes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSchemes.fulfilled, (state, action) => {
        state.schemes = action.payload.map((scheme) => ({
          ...scheme,
          city: JSON.parse(scheme.city),
          gender: JSON.parse(scheme.gender),
          employmentStatus: JSON.parse(scheme.employmentStatus),
          schemeType: JSON.parse(scheme.schemeType),
          maritalStatus: JSON.parse(scheme.maritalStatus),
          occupation: JSON.parse(scheme.occupation),
        }));
        state.loading = false;
      })
      .addCase(fetchSchemes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default schemesSlice.reducer;
