import React from "react";
import codingPic from "./images/coding-pic.png";

import "./Home.css";
import Typewriter from "./Typewriter";

export default function Home() {
  return (
    <div className="Home">
      <hr className="line-1" />
      <section className="grid">
        <div className="name">
          <h1>
            <br />
            <br />
            I'm <strong>Raghda Al-Shaikhli </strong>, a <br />
            Front-end Developer{" "}
          </h1>
          <Typewriter />
          <button
            className="skills-btn"
            type="button"
            href="src/About.js/#skills"
          >
            Skills
          </button>
          <footer>
            <hr className="line-2" />
            <h5> Let's connect!</h5>
            <span>
              <hr className="line-3" />
            </span>
            <span className="icons">
              <a
                href="https://www.linkedin.com/in/raghdaalizz/"
                title="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-details"
              >
                <i className="fa-brands fa-linkedin"> </i>
              </a>
              <a
                href="https://github.com/raalizz"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-details"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.shecodes.io/graduates/84221-raghda-al-shaikhli"
                title="SheCodes Profile"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-details"
              >
                <i className="fa-solid fa-square-arrow-up-right"></i>
              </a>

              <a
                href="mailto:raalizz.h@gmail.com"
                title="Email"
                className="contact-details"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </span>
          </footer>
        </div>
        <div>
          <img src={codingPic} alt="coding languages" />
        </div>
      </section>
    </div>
  );
}
