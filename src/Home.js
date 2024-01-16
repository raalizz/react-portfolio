import React from "react";
import codingPic from "./images/coding-pic.png";

import "./Home.css";
import Typewriter from "./Typewriter";

export default function Home() {
  return (
    <div className="Home">
      <hr />
      <section className="grid">
        <div className="name">
          <h1>
            {" "}
            <br />
            <br />
            I'm <strong>Raghda Al-Shaikhli </strong>, a <br />
            Front-end Developer{" "}
          </h1>
          <Typewriter />
        </div>
        <div>
          <img src={codingPic} alt="coding languages" />
        </div>
      </section>
    </div>
  );
}
