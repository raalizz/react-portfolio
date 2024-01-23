import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </React.StrictMode>
  </Router>
);

reportWebVitals();
