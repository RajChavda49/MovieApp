import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <h1 className="font-semibold text-5xl leading-[100vh] text-center h-screen text-white bg-primaryColor">
        Error404!!!
      </h1>
      <Link to="/">
        <button className="bg-white absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black p-5 rounded-lg text-center transition-all duration-500 ease-in-out hover:bg-fontSecondary hover:text-white">
          Back to Home
        </button>
      </Link>
    </>
  );
};

export default Error404;
