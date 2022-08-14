import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://www.reddit.com/";

const initialState = {
  data: [],
  status: "idle", // idle | loading | succeeded | failed
  error: null,
  after: "",
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (endpoint) => {
    const postURL = `${BASE_URL}r/${endpoint}.json`;
    try {
      const response = await axios.get(postURL);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data.children;
        state.after = action.payload.data.after;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectPostsError = (state) => state.posts.error;
export const selectPostsStatus = (state) => state.posts.status;
export const selectPageAfter = (state) => state.posts.after;
export const selectPosts = (state) => state.posts.data;

export default postSlice.reducer;
