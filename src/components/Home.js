import React from "react";

import "../old/font_face.css";
import "../old/index.css";
import logo from "../old/logo.png";

export default function Home() {
  return (
    <>
      <div>
        <header>
          <div className="header-container">
            <h1 className="header-container-title">
              <div className="logo-container">
                <img className="logo" src={logo} alt="logo"></img>
              </div>
              <div>Welcome to my workspace</div>
            </h1>
          </div>

          <div className="header-cards">
            <div className="header-card">ANIME</div>
            <div className="header-card">DRAWINGS</div>
            <div className="header-card">Coming soon!</div>
            <div className="header-card">Coming soon!</div>
            <div className="header-card">Coming soon!</div>
            <div className="header-card">Coming soon!</div>
            <div className="header-card">Coming soon!</div>
          </div>
        </header>

        <div className="main-content"></div>
      </div>
    </>
  );
}
