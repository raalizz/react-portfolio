import React from "react";
import myResume from "./documents/Raghda-Alizz-AlShaikhli.pdf";

import resumePic from "./images/resume-pic.png";

import "./Resume.css";

export default function Resume() {
  return (
    <div className="Resume">
      <img src={resumePic} alt="my resume" className="my-resume" />
      <figcaption>
        <a href={myResume} rel=" noopener noreferrer" target="_blank">
          <button className="resume-btn"> Download Resume</button>
        </a>
      </figcaption>
    </div>
  );
}
