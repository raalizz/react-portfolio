import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="src/index.js">
          RA <i className="fa-solid fa-circle dot"></i>
        </a>
        <button
          className="navbar-toggler hamburger-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link background"
              aria-current="page"
              href="src/About.js"
            >
              About
            </a>
            <a className="nav-link background" href="src/Projects.js">
              Projects
            </a>
            <a className="nav-link background" href="src/Resume.js">
              Resume
            </a>
            <a className="nav-link background contact" href="src/Contact.js">
              Contact
            </a>
            <button className="btn" type="button" href="src/Contact.js">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
