import React from "react";
import myResume from "./documents/Raghda-alizz-alshaikhli-resume.pdf";

import resumePic from "./images/resume-pic.png";

import "./Resume.css";

export default function Resume() {
  return (
    <div className="Resume">
      <img src={resumePic} alt="my resume" className="my-resume" />
      <figcaption>
        <button>
          <a href={myResume} rel=" noopener noreferrer" target="_blank">
            Download Resume
          </a>
        </button>
      </figcaption>
    </div>
  );
}
