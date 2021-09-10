import React from "react";
import Card from "../components/Card";
import CardData from "../components/CardData";
import Parallax from "react-rellax";

const CardGroup = () => {
  return (
    <>
      <div className="my-5">
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <Parallax speed={1}>
                <h1 id="cardheading">Teachings of Bhagavad Gita</h1>
              </Parallax>
              <hr />
              <div className="row gy-4">
                {CardData.map((val, index) => {
                  return (
                    <Card
                      key={val.title}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      paragraph={val.paragraph}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardGroup;
