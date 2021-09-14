import React, { useEffect } from "react";
import Aos from "aos";
import slide3 from "../images/about1.png";
import logo from "../images/icon.png";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div
              id="about"
              className="row flex-lg-row-reverse align-items-center g-5 py-5"
            >
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  data-aos="fade-up"
                  id="aboutimg2"
                  src={slide3}
                  className="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="500"
                  height="200"
                  loading="lazy"
                />
              </div>
              <div data-aos="fade-up" className="col-lg-6">
                <h1
                  style={{ color: "#28d" }}
                  className="display-5 fw-bold lh-1 mb-3"
                >
                  Bhagavad Gita
                </h1>
                <p className="lead">
                  The Bhagavad Gita, an ancient sacred text of India is regarded
                  universally as the prime source of spiritual knowledge and
                  inspiration for the humankind. Spoken directly by Lord Sri
                  Krishna to His intimate friend Arjuna, the Bhagavad Gita’s
                  seven hundred verses provide a definitive guide to the science
                  of self-realization. No other book reveals, in such a lucid
                  and profound way, truths like the Bhagavad Gita does.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" className="px-4 py-5 my-5 text-center">
              <img
                className="d-block mx-auto mb-4"
                src={logo}
                alt=""
                width="100"
                height="100"
              />
              <h1 className="display-5 fw-bold">A React Js Application</h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">By - Akash Singh</p>

                <a
                  href="https://github.com/xakash00"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i aria-hidden="true" className="fab fa-3x fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
