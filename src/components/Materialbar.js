import React from "react";

import { Link } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { bugOutline, gitBranchOutline } from "ionicons/icons";
import "../old/index.css";
import "../old/font_face.css";

export default function Materialbar() {
  return (
    <div className="material-bar">
      <div className="material-bar-left">
        <svg focusable="false" viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </div>

      <div className="material-bar-middle">
        <a href="/" className="no-decor-link">
          Hydrogen's Workspace
        </a>
      </div>

      <div className="material-bar-right">
        <Link to="/history" className="no-decor-link">
          <IonIcon icon={bugOutline} style={{ margin: "0 5px" }} />
        </Link>
        <Link to="/" className="no-decor-link">
          <IonIcon icon={gitBranchOutline} style={{ margin: "0 5px" }} />
        </Link>
      </div>
    </div>
  );
}
