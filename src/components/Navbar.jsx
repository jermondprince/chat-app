import React from "react";
import jermond from "../img/jermond.jpeg";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Wonder Chat</span>
      <div className="user">
        <img src={jermond} alt="jermond" />
        <span>Jermond</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
