import React from "react";
import codingPic from "./images/coding-pic.png";

import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <hr />
      <section className="grid">
        <div>
          <h1>
            {" "}
            I'm <strong>Raghda Al-Shaikhli </strong>, a <br />
            Front-end Developer{" "}
          </h1>
        </div>
        <div>
          <img src={codingPic} alt="coding languages" />
        </div>
      </section>
    </div>
  );
}
