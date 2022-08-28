import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: { search: "" },
  reducers: {
    setSearch: (state, { payload }) => {
      console.log(payload);
      state.search = payload;
    },
    resetSearch: (state) => (state.search = ""),
  },
});

export default searchSlice.reducer;
export const selectSearch = (state) => state.search.search;
export const { setSearch } = searchSlice.actions;
