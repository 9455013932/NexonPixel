import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("auth/user", async (_,{rejectWithValue}) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/auth/user`, { withCredentials: true });
        return {
            id: data._id,
            name: data.name,
            email: data.email,
            role:data.role,
        }
    } catch (error) {
        return rejectWithValue(error.response?.data || "Failed to fetch user");
    }

});

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, status: "idle" },
    reducers: { logout: (state) => { state.user = null; } },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.status = "loading";
          })
          .addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.status = "succeeded";
          })
          .addCase(fetchUser.rejected, (state, action) => {
            state.user = null;
            state.status = "failed";
            state.error = action.payload;
          });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
