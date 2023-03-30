import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/MovieApi";
import { Apikey } from "../../common/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await MovieApi.get(
      `?apikey=${Apikey}&s=${term}&type=movie`
    ).catch((err) => {
      console.log(err.response);
    });
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await MovieApi.get(
      `?apikey=${Apikey}&s=${term}&type=series`
    ).catch((err) => {
      console.log(err.response);
    });
    return response.data;
  }
);

export const fetchMovieDetailsAsync = createAsyncThunk(
  "movies/fetchMovieDetailsAsync",
  async (id) => {
    const response = await MovieApi.get(
      `?apikey=${Apikey}&i=${id}&plot=full`
    ).catch((err) => {
      console.log(err.response);
    });
    return response.data;
  }
);
const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
   loading: false,
  error: null,
  success: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {},
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {},
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload };
    },
    [fetchMovieDetailsAsync.fulfilled]: (state, { payload }) => {
      return { selectedMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;
