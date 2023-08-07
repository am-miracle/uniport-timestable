import { configureStore } from "@reduxjs/toolkit";
import timetableSlice from "./slice/timetableSlice";
import authSlice from "./slice/authSlice";

const store = configureStore({
    reducer: {
        timetable: timetableSlice.reducer,
        auth: authSlice.reducer
    }
})

export default store