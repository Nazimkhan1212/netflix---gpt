import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import moviesSlice from "./slices/moviesSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesSlice,
  },
});

export default store;
