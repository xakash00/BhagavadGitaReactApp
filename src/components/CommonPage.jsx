import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import krishna from "../images/animate.png";
import Aos from "aos";
import Parallax from "react-rellax";
import "aos/dist/aos.css";

const Common = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div id="content" className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 order-2  d-flex justify-content-center flex-column">
                  <div className="typewriter container-lg">
                    <Parallax speed={7}>
                      <h1>THE SONG BY GOD</h1>
                    </Parallax>

                    <Parallax speed={5}>
                      <NavLink
                        data-aos="fade-right"
                        className="button"
                        to="/index"
                      >
                        Read the Bhagavad Gita
                      </NavLink>
                    </Parallax>

                    <Parallax speed={3}>
                      <NavLink
                        data-aos="fade-left"
                        className="button"
                        to="/intro"
                      >
                        Introduction
                      </NavLink>
                    </Parallax>

                    <Parallax speed={1}>
                      <NavLink
                        data-aos="fade-right"
                        className="button"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </Parallax>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <Parallax speed={10}>
                    <img
                      src={krishna}
                      className="img-fluid animated bounceInDown"
                      alt="Common img"
                    />
                  </Parallax>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Common;
