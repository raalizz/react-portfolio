import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./Home";
import Navbar from "./Navbar";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>
);

reportWebVitals();
