import React from "react";
import myPicture from "./images/my-pic.JPG";

import "./About.css";

export default function About() {
  return (
    <div className="About">
      <div className="grid">
        <div className="section-1">
          <img src={myPicture} alt="personal pic" className="my-image" />
        </div>
        <div className="section-2">
          <h2> About Me ...</h2>
        </div>
      </div>
    </div>
  );
}
