import React, { useEffect } from "react";
import Aos from "aos";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/about1.png";

const Crousel = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide mx-auto"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={slide1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={slide2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={slide3} alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Crousel;
