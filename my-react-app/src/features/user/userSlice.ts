import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type UserState = {
  loading: boolean;
  users: any; 
  error: string;
}

const initialState: UserState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<any>("https://jsonplaceholder.typicode.com/users");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch users");
    }
  }
);


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<number[]>) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload || "Something went wrong";
    });
  },
});

export default userSlice.reducer;
