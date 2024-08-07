import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "users/getAllUsers",
  async (thunkApi) => {
    const response = await fetch(`http://localhost:8000/users?_limit=10`, {
      method: "GET",
      next: { tags: ["list-users"] },
    });
    const data = response.json();
    return data;
  }
);
const initialState = {
  listUsers: [],
} as any;

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    resetUsers: (state) => {
      state.listUsers = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.listUsers = action.payload;
    });
  },
});

export default userSlice.reducer;
