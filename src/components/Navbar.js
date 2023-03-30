import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center text-fontPrimary bg-secondaryColor justify-between sm:px-10 px-5 sm:h-20 h-16 w-full">
        <div className="text-4xl">
          <Link to="/">
            <span className="text-fontSecondary">Movie App</span>
          </Link>
        </div>
        <div className="">
          <UserIcon className="h-10 w-10 text-white" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
