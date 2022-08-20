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

export const fetchNewPosts = createAsyncThunk(
  "posts/fetchNewPosts",
  async (endpoint) => {
    const postURL = `${BASE_URL}${endpoint}.json`;
    try {
      const response = await axios.get(postURL);
      return response.data;
    } catch (error) {
      console.error(error.message);
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
      .addCase(fetchNewPosts.pending, (state) => {
        postsAdapter.removeAll(state);
        state.status = "loading";
      })
      .addCase(fetchNewPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        let loadedPosts = action.payload.data.children.map((item) => {
          return { ...item.data, kind: item.kind };
        });
        postsAdapter.upsertMany(state, loadedPosts);
        state.after = action.payload.data.after;
      })
      .addCase(fetchNewPosts.rejected, (state, action) => {
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
