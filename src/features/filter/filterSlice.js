import { createSlice } from "@reduxjs/toolkit";

// lo
const initialState = {
  search: "",
  tags: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexOfTag = state.tags.indexOf(action.payload);

      if (indexOfTag !== -1) {
        state.tags.splice(indexOfTag, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { tagRemoved, tagSelected, searched } = filterSlice.actions;
