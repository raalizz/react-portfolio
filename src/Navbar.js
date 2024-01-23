import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <BootstrapNavbar expand="lg">
      <div className="container-fluid">
        <LinkContainer to="/">
          <BootstrapNavbar.Brand className="logo">
            RA <i className="fa-solid fa-circle dot"></i>
          </BootstrapNavbar.Brand>
        </LinkContainer>
        <BootstrapNavbar.Toggle
          className="hamburger-btn"
          aria-controls="navbarNavAltMarkup"
        />
        <BootstrapNavbar.Collapse id="navbarNavAltMarkup">
          <Nav className="navbar-nav">
            <LinkContainer to="/about">
              <Nav.Link className="nav-link background">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link className="nav-link background">Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/resume">
              <Nav.Link className="nav-link background">Resume</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="nav-link background contact">
                Contact
              </Nav.Link>
            </LinkContainer>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </div>
    </BootstrapNavbar>
  );
}
