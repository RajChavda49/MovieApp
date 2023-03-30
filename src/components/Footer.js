import React from "react";

const Footer = () => {
  return (
    <div className="text-white text-xl bg-secondaryColor text-center w-full py-5">
      <p className="text-xl">Movie App</p>
      <p>&#169; {new Date().getFullYear()} All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
