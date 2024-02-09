import React from "react";

import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="container">
        <form className="contact-form">
          <h3 className="contact-title"> GET IN TOUCH</h3>
          <input
            type="text"
            className="contact-name"
            placeholder="Name"
            required
          ></input>
          <input
            type="email"
            className="contact-email"
            placeholder="Email"
            required
          ></input>
          <input
            type="text"
            className="contact-phone"
            placeholder="Phone Number"
            required
          ></input>
          <textarea
            className="message"
            rows="4"
            placeholder="Hi there ..."
          ></textarea>
          <button type="submit" className="contact-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
