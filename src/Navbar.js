import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="src/index.js">
          Raghda <i className="fa-solid fa-circle dot"></i>
        </a>
        <button
          className="navbar-toggler"
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
            <button className="btn" type="button" href="src/Contact.js">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
