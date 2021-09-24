import React from "react";
import logo from "../images/icon.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div>
        <footer>
          <nav className="footer-inner">
            <div>
              <div className="row">
                <div className="col-sm">
                  <section className="footer-item">
                    <div className="col-sm footersections">
                      <div className="d-flex justify-content-start align-items-center">
                        <img className="footerLogo" src={logo} alt="logo" />
                        <div>
                          <h5 className="color">BHAGAWAD GITA</h5>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-sm">
                  <section className="footer-item">
                    <h3>Explore</h3>

                    <ul>
                      <li>
                        <NavLink to="/" className="footer_links">
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/intro" className="footer_links">
                          Introduction
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/index" className="footer_links">
                          Start Reading
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/about" className="footer_links">
                          About
                        </NavLink>
                      </li>
                    </ul>
                  </section>
                  <section className="footer-item">
                    <h3>Follow</h3>
                    <ul>
                      <li>
                        <a href="https://github.com/xakash00"  target="_blank"  rel="noreferrer" className="footer_links">
                          Github
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com"  target="_blank"  rel="noreferrer" className="footer_links">
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com"  target="_blank"  rel="noreferrer" className="footer_links">
                          LinkedIn
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="col-sm">
                  <h2 className="footer_h2">
                     React Js application <br />
                    <span>
                      <i className="fas fa-code"></i>
                    </span>{" "}
                   xakashsingh00@gmail.com
                    <br />
                  </h2>
                </div>
              </div>
            </div>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
