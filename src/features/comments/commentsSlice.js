import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://www.reddit.com/";

const commentsAdapter = createEntityAdapter({});

const initialState = commentsAdapter.getInitialState({
  error: null,
  status: "idle",
  after: "",
});

const getEndpoint = async (endpoint) => {
  const postURL = `${BASE_URL}${endpoint}.json`;
  try {
    const response = await axios.get(postURL);
    return response.data;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};
export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  getEndpoint
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        commentsAdapter.removeAll(state);
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        let loadedComments = action.payload[1].data.children.map((comment) => {
          return { ...comment.data, kind: comment.kind };
        });
        commentsAdapter.upsertMany(state, loadedComments);
        state.after = null;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectCommentsError = (state) => state.comments.error;
export const selectPageAfter = (state) => state.comments.after;
export const selectCommentsStatus = (state) => state.comments.status;

export const {
  selectAll: selectComments,
  selectById: selectCommentById,
  selectIds: selectCommentIds,
} = commentsAdapter.getSelectors((state) => state.comments);

export default commentsSlice.reducer;
