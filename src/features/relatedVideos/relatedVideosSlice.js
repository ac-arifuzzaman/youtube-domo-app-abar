import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getRelatedVideosApi from "./relatedVideosAPI";

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "",
};

// create async thunk function
export const fetchRelatedVideos = createAsyncThunk(
  "videos/fetchRelatedVideos",
  async ({ id, tags }) => {
    const relatedVideos = getRelatedVideosApi({ id, tags });
    return relatedVideos;
  }
);

// create reducer function
const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.relatedVideos = [];
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedVideosSlice.reducer;
