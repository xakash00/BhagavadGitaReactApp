import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav
              className={
                colorChange
                  ? "navbar navbar-expand-lg colorChange fixed-top"
                  : " navbar navbar-expand-lg fixed-top"
              }
            >
              <NavLink exact className="navbar-brand" to="/">
                Bhagavad Gita
                <i className="fas fa-sun"></i>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <i className="fas fa-bars"></i>
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item active">
                    <NavLink
                      exact
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link active" to="/index">
                      Start Reading
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link active" to="/intro">
                      Introduction
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link active" to="/about">
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
