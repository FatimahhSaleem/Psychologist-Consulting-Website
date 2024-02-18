import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import logo from "./images/logo.png";

function NavBar({ refresh, load }) {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const authToken = localStorage.getItem("token");
      const decoded = jwtDecode(authToken);
      setUser(decoded.role);
    }
  }, [load]);
  const handleLogout = async () => {
    localStorage.removeItem("token");
    setUser("");
    await refresh();
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
        <div className="container p-0">
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
            {!user && (
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
            )}
            {user === "patient" && (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
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
                    to="/my-appointments"
                    className="btn btn-outline-warning
                    text-white ms-2"
                  >
                    My Appointments
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/profile"
                    className="btn btn-outline-warning
                    text-white ms-2"
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={handleLogout}
                    className="btn btn-outline-warning text-white ms-2"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            )}
            {user === "psychologist" && (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/psychologist/home">
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
                    to="/profile"
                    className="btn btn-outline-warning
                    text-white ms-2"
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={handleLogout}
                    className="btn btn-outline-warning text-white ms-2"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
