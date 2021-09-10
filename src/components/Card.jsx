import React, { useEffect } from "react";
import Aos from "aos";

const Card = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="col-sm-3 col-10 mx-auto">
        <div data-aos="fade-up" id="card" className="card">
          <img
            id="cardimg"
            src={props.imgsrc}
            className="card-img-top"
            alt="img1"
          />
          <div className="card-body">
            <h5 style={{ color: "crimson" }} className="card-title text-center">
              {props.title}
            </h5>
            <hr />
            <p className="card-text">{props.paragraph}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
