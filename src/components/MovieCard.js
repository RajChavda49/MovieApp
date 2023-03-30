import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="rounded-xl hover:shadow-indigo-400 transition-all hover:scale-105 ease-in-out duration-500 delay-100 shadow-2xl h-auto bg-gradient-to-tr p-1 from-[#659999] via-[#86A8E7] to-[#6be585]">
      <Link to={`/movie/${movie?.imdbID}`} className="cursor-pointer">
        <div className="w-full h-[32rem] space-y-3 bg-secondaryColor text-left rounded-xl">
          <img
            src={movie.Poster}
            alt={movie.Title}
            loading="lazy"
            className="object-cover object-top w-full h-[24rem] rounded-tl-xl rounded-tr-xl"
          />
          <p className="font-medium text-fontPrimary text-base px-3 ">
            {movie?.Title}
          </p>
          <p className="font-medium text-fontPrimary text-base px-3">
            {movie?.Year}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
