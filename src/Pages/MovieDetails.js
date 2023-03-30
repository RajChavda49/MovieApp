import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieApi from "../common/MovieApi";
import { Apikey } from "../common/MovieApiKey";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import { fetchMovieDetailsAsync } from "../features/movies/movieDetailsSlice";
import {
  StarIcon,
  CalendarDaysIcon,
  FilmIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";
import {
  removeSelectedMovieOrShow,
  fetchMovieDetailsAsync,
} from "../features/movies/movieSlice";

const MovieDetails = () => {
  const movie = useSelector((state) => state.movies.selectedMovieOrShow);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDetailsAsync(id));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, []);
  return (
    <>
      <Navbar />
      {movie ? (
        <div className="bg-primaryColor h-screen w-full flex items-start p-5 gap-x-5">
          <div className="flex items-center justify-start space-y-3 w-fit">
            <img
              src={movie?.Poster}
              alt={movie?.Title}
              className="object-contain object-center w-full h-fit rounded-lg border-4 border-fontSecondary p-2"
            />
          </div>
          <div className="text-white space-y-3 w-fit">
            <p className="text-4xl">{movie?.Title}</p>
            <p className="text-lg">{movie?.Plot}</p>
            <p className="text-lg flex items-center text-fontSecondary">
              <span className="flex items-center">
                IMDB Rating
                <StarIcon className="h-5 text-yellow-400" />:
              </span>{" "}
              <span className="font-semibold mr-4">{movie?.imdbRating}</span>
              <span className="flex items-center">
                IMDB Votes
                <HandThumbUpIcon className="h-5 text-white" />:
              </span>{" "}
              <span className="font-semibold mr-4">{movie?.imdbVotes}</span>
              <span className="flex items-center">
                Runtime <FilmIcon className="h-5 text-blue-200" />:
              </span>{" "}
              <span className="font-semibold mr-4">{movie?.Runtime}</span>
              <span className="flex items-center">
                ReleaseDate
                <CalendarDaysIcon className="h-5 text-gray-200" />:
              </span>{" "}
              <span className="font-semibold mr-4">{movie?.Released}</span>
            </p>
            <p className="text-lg space-x-3">
              <span className="text-fontSecondary">Language</span>
              <span>{movie?.Language}</span>
            </p>
            <p className="text-lg space-x-3">
              <span className="text-fontSecondary ">Director</span>
              <span>{movie?.Director}</span>
            </p>
            <p className="text-lg space-x-3">
              <span className="text-fontSecondary ">Writer</span>
              <span>{movie?.Writer}</span>
            </p>
            <p className="text-lg space-x-3">
              <span className="text-fontSecondary ">Genres</span>
              <span>{movie?.Genre}</span>
            </p>
            <p className="text-lg space-x-3">
              <span className="text-fontSecondary ">Cast</span>
              <span>{movie?.Actors}</span>
            </p>
          </div>
        </div>
      ) : (
        <div>{movie?.Error}</div>
      )}
      <Footer />
    </>
  );
};

export default MovieDetails;
