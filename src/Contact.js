import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_aw4svvv", "template_q55ev8q", form.current, {
        publicKey: "oULEWOy0to9gUA5nx",
      })
      .then(
        () => {
          alert("Message Sent");
          console.log("SUCCESS!");
        },
        (error) => {
          alert("Error! Message Not Sent!");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="Contact">
      <div className="contact-container">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <h3 className="contact-title"> GET IN TOUCH</h3>
          <input
            type="text"
            className="contact-name"
            placeholder="Name"
            name="user_name"
            required
          ></input>
          <input
            type="email"
            className="contact-email"
            placeholder="Email"
            name="user_email"
            required
          ></input>

          <textarea
            className="message"
            rows="4"
            placeholder="Hi there ..."
            name="message"
          ></textarea>
          <button type="submit" className="contact-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
