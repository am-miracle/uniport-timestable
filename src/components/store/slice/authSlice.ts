import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isLecturer: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setLecturerStatus: (state, action) => {
      state.isLecturer = action.payload;
    },
  },
});

export const { setLecturerStatus } = authSlice.actions;

export default authSlice;
