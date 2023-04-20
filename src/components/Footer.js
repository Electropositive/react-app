import React from "react";
import "../old/footer.css";
import "../old/font_face.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <div>
          <ul>
            <li aria-hidden="true"> ©2023 Valix Hosting Services </li>
            <li>
              {" "}
              <a href="#/">Privacy Policy</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#/">Terms of Service</a>{" "}
            </li>
          </ul>
        </div>
        <div className="footer-links-right-container">
          <a
            className="user-feedback-link"
            href="#/"
            tabindex="0"
            aria-haspopup="true"
          >
            <svg
              className="user-feedback-link__svg-container"
              viewBox="0 0 24 24"
            >
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"></path>
              <path d="M0 0h24v24H0V0z" fill="none"></path>
            </svg>{" "}
            HYDROGEN{" "}
          </a>
        </div>
      </div>
    </footer>
  );
}
