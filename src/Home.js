import React from "react";
import codingPic from "./images/coding-pic.png";

import "./Home.css";
import Typewriter from "./Typewriter";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="Home">
      <hr className="line-1" />
      <section className="grid">
        <div className="name">
          <h1>
            <br />
            <br />
            I'm <strong> Raghda Al-Shaikhli </strong>
            , a <br />
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
          <Footer />
        </div>
        <div>
          <img src={codingPic} alt="coding languages" />
        </div>
      </section>
    </div>
  );
}
