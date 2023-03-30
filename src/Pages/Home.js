import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";
import MovieListing from "./MovieListing";

const Home = () => {
  const [term, setTerm] = useState("Marvel");
  const dispatch = useDispatch();

  // const fetchMovies = async () => {
  //   if (searchTerm === "") {
  //     alert("Enter a movie name");
  //     return false;
  //   }
  //   const response = await movieapi
  //     .get(`?apikey=${Apikey}&s=${searchTerm}&type=movie`)
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  //   dispatch(addMovies(response.data));
  // };

  useEffect(() => {
    // fetchMovies();
    if (!term) {
      return alert("Enter a movie name");
    } else {
      dispatch(fetchAsyncMovies(term));
      dispatch(fetchAsyncShows(term));
    }
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => console.log(json))
    //   .catch((err) => console.log(err.response));
  }, []);
  return (
    <div className="bg-primaryColor">
      <Navbar />
      <div className="bg-primaryColor text-white h-full w-full sm:p-10 p-5">
        <MovieListing setTerm={setTerm} term={term} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
