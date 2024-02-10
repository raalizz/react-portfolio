import React from "react";
import myPicture from "./images/my-picture.jpg";

import "./About.css";

export default function About() {
  return (
    <div className="About">
      <div className="about-container">
        <div className="row row-cols-3 columns">
          <div className="col-sm sections">
            <img src={myPicture} alt="personal pic" className="my-pic" />
          </div>
          <div className="col-sm sections">
            <h2> About Me</h2>

            <h6>
              Junior front-end developer ready to apply my skills in a
              professional setting. I'm all about crafting user-friendly
              interfaces that are functional and visually compelling.
              <br />
              <br />
              When I'm not busy coding, you'll likely find me watching Anime,
              reading books, or on a plane heading somewhere.
            </h6>
          </div>
          <div className="col-sm sections">
            <h2>Tech Skills</h2>
            <br />
            <span>
              <i className="fa-brands fa-html5 icons" title="HTML5"></i>{" "}
            </span>
            <span>
              {" "}
              <i className="fa-brands fa-css3 icons" title="CSS3"></i>
            </span>
            <span>
              <i className="fa-brands fa-js icons" title="JavaScript"></i>
            </span>
            <span>
              {" "}
              <i className="fa-brands fa-react icons" title="Reactjs"></i>
            </span>
            <span>
              {" "}
              <i className="fa-brands fa-bootstrap icons" title="Bootstrap"></i>
            </span>
            <span>
              {" "}
              <i className="fa-brands fa-github icons" title="GitHub"></i>
            </span>
            <span>
              {" "}
              <i className="fa-brands fa-google icons" title="SEO"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
