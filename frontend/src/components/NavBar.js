import React from "react";

import logo from "./images/logo.png";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand fs-1" to="/">
            <img src={logo} alt="logo" width="55" height="45" />
            <span className="text-warning">Virtual</span>Therapy
          </Link>{" "}
          <button
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-bs-target="#navbarSupportedContent"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/our-goals">
                  Our Goals
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signup"
                  className="btn btn-outline-warning text-white mx-2 btn-color"
                >
                  SignUp
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="btn btn-outline-warning text-white px-3 btn-color"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
