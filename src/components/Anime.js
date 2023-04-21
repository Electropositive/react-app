import React from "react";

// importing StyleSheet
import "../css/anime.css";
import "../old/font_face.css";

export default function Anime() {
  return (
    <div>
      <div className="bg-anime-image anpg-main-container">
        <div className="left">
          <div className="pf-title-container">
            <img className="pf-title-img" src="../../images.jpeg" alt="dw" />
            <div className="pf-title-text">Johan Liebert</div>
          </div>
          <div className="pf-info">
            Name : Johan Liebert
            <br />
            Age : 69 years
            <br />
            Anime : Monster
          </div>
          <div className="pf-dis">
          Charismatic, Intelligent, Manipulative, Calculating, Ruthless, Sociopathic
          </div>
        </div>
        <div className="anpg-status">We ❤️ Anime</div>
      </div>
    </div>
  );
}
