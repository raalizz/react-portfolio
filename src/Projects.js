import React from "react";
import NomnomProject from "./images/NomNom-Ninja-AI-project .png";

import "./Projects.css";

export default function Projects() {
  return (
    <div className="Projects">
      <h2> Take a look at what I've been working on </h2>
      <div className="dots"> ... </div>
      <section className="project-1">
        <div className="description">
          <p> description goes here </p>
        </div>
        <div className="project-images">
          <img
            src={NomnomProject}
            alt="AI Recipe Generator"
            className="images"
          />
        </div>
      </section>
    </div>
  );
}
