import React from "react";

import resumePic from "./images/resume-pic.png";

import "./Resume.css";

export default function Resume() {
  return (
    <div className="Resume">
      <img src={resumePic} alt="my resume" className="my-resume" />
    </div>
  );
}
