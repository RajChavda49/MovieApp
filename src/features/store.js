import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";
import movieDetailReducer from "./movies/movieDetailsSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    //  movieDetail: movieDetailReducer
  },
});
