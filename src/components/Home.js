import React from "react";

import "../old/font_face.css";
import "../old/index.css";
import logo from "../old/logo.png";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-main-container">
          <h1 className="home-main-content-title">
            <div className="logo-container">
              <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div>Welcome to my workspace</div>
          </h1>
        </div>

        <div className="home-cards-container">
          <div className="home-cards">ANIME</div>
          <div className="home-cards">DRAWINGS</div>
          <div className="home-cards">Coming soon!</div>
          <div className="home-cards">Coming soon!</div>
          <div className="home-cards">Coming soon!</div>
          <div className="home-cards">Coming soon!</div>
          <div className="home-cards">Coming soon!</div>
        </div>

        <div className="main-content"></div>
      </div>
    </>
  );
}
