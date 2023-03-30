import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
// import Slider from "react-slick";
import Slider from "react-slick";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

// import "./styles.css";

const MovieListing = ({ term, setTerm }) => {
  const movies = useSelector((state) => state.movies.movies);
  const shows = useSelector((state) => state.movies.shows);

  const dispatch = useDispatch();
  // variables for render movies & shows
  let renderMovies,
    renderShows = "";
  // render movies
  renderMovies =
    movies && Object.keys(movies).length !== 0 && movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))
    ) : (
      <div>
        <h3>{movies?.Error}</h3>
      </div>
    );

  // render shows
  renderShows =
    shows && Object.keys(shows).length !== 0 && shows.Response === "True" ? (
      shows.Search.map((show, index) => <MovieCard movie={show} key={index} />)
    ) : (
      <div>
        <h3>{movies?.Error}</h3>
      </div>
    );
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  const handleSeach = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
  };
  return (
    <>
      <div className="w-1/2 mx-auto h-12 flex items-center gap-x-4">
        <input
          value={term}
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          className="w-full rounded-3xl outline-none pl-10 p-2 text-black placeholder:text-black"
          placeholder="Search..."
        />
        <button onClick={(e) => handleSeach(e)}>
          <MagnifyingGlassIcon className="h-10 rounded-full bg-white text-black w-10 p-2" />
        </button>
      </div>
      <h2 className="text-center text-fontSecondary underline-offset-8 underline md:text-5xl text-xl font-semibold block w-full md:m-10 mb-5">
        Movies
      </h2>
      {/* <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 place-items-start justify-items-center w-screen h-auto gap-5"> */}
      <Slider {...settings}>{renderMovies}</Slider>
      {/* <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {renderMovies.map((movie) => (
            <div key={movie?.imdbID} className="w-full h-[32rem] space-y-3 bg-secondaryColor text-left rounded-xl">
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
          ))}
        </SwiperSlide>
        {/* <SwiperSlide>{renderMovies}</SwiperSlide> */}
      {/* </Swiper> */}
      {/* </div> */}
      <h2 className="text-center text-fontSecondary underline-offset-8 underline md:text-5xl text-xl font-semibold block w-full md:m-10 mb-5">
        Shows
      </h2>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 place-items-start justify-items-center h-auto gap-5">
        {renderShows}
      </div>
    </>
  );
};

export default MovieListing;
