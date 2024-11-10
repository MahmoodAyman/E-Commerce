import { createSlice } from "@reduxjs/toolkit";
import getCategories from "./thunk/getCategories";

interface ICategoryState {
  records: {
    id: number;
    title: string;
    prefix: string;
    image: string;
  }[];
  loading: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | null;
}
const initialState: ICategoryState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.error = null;
      state.records = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = "rejected";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { getCategories };
export default categoriesSlice.reducer;
