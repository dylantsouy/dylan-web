import React from "react";
import Navbar from "./Navbar";
import Bottom from "./Bottom";


const Common = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <>{children}</>
      <Bottom />
    </div>
  );
};

export default Common;
