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
  filter: "hot", // hot | top | new
});

const getEndpoint = async (endpoint) => {
  let postURL = BASE_URL;
  if (endpoint) {
    postURL += `${endpoint}`;
  }
  console.log(postURL);

  try {
    const response = await axios.get(postURL);
    return response.data;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

export const fetchNewPosts = createAsyncThunk(
  "posts/fetchNewPosts",
  getEndpoint
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
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
export const selectFilter = (state) => state.posts.filter;

export const {
  selectAll: selectPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state) => state.posts);

export default postSlice.reducer;
export const { setFilter } = postSlice.actions;
