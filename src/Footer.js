import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <hr className="line-2" />
        <h5> Let's connect!</h5>
        <span>
          <hr className="line-3" />
        </span>
        <span className="footer-icons">
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
  );
}
