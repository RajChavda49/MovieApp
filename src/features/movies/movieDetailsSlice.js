import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/MovieApi";
import { Apikey } from "../../common/MovieApiKey";

export const fetchMovieDetailsAsync = createAsyncThunk(
  "movieDetail/fetchMovieDetailsAsync",
  async (id) => {
    const response = await MovieApi.get(
      `?apikey=${Apikey}&i=${id}&plot=full`
    ).catch((err) => {
      console.log(err.response);
    });
    return movieDetail(response.data);
  }
);

const initialState = {
  movieDetail: {},
  selectedMovieOrShow: {},
  loading: false,
  error: null,
  success: false,
};

const movieDetailsSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {
    movieDetail: (state, { payload }) => {
      state.movieDetail = payload;
    },
  },
  extraReducers: {
    [fetchMovieDetailsAsync.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [fetchMovieDetailsAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.success = true;
      return { ...state, movieDetail: payload };
    },
    [fetchMovieDetailsAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
  },
});

export const { movieDetail } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
