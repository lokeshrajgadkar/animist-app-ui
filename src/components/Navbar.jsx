import React from "react";
import "./Navbar.css";
import LogoIcon from "../assets/LogoIcon.png";
import animistLogo from "../assets/animistLogo.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={animistLogo} alt="animist logo" />
      </div>
      <div className="nav-right">
        <span>
          <input type="text" className="search" placeholder="Search Anime" />
          <button>Search</button>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
