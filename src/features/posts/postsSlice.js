import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://www.reddit.com/";

const postsAdapter = createEntityAdapter({});

const initialState = postsAdapter.getInitialState({
  status: "idle", // idle | loading | succeeded | failed
  error: null,
  after: "",
});

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
        let loadedPosts = action.payload.data.children.map((item) => {
          return item.data;
        });
        postsAdapter.upsertMany(state, loadedPosts);
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

export const {
  selectAll: selectPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state) => state.posts);

export default postSlice.reducer;
