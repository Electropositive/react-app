import React from "react";

import {
  Link,
} from "react-router-dom";

import "../old/index.css";
import "../old/font_face.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-link no-decor-link">Home</Link>
        <Link to="/anime" className="navbar-link no-decor-link">Anime</Link>
        <Link to="/" className="navbar-link no-decor-link">Page3</Link>
        
        {/* <a href="/" className="navbar-link no-decor-link">
          Home
        </a> */}
        {/* <a href="" className="navbar-link no-decor-link">
          Anime
        </a>
        <a href="#/" className="navbar-link no-decor-link">
          Page3
        </a> */}
      </div>

      <div className="navbar-right">Made by a stduent from B15</div>
    </div>
  );
}
