import React, { useEffect } from "react";
import CommonPage from "../components/CommonPage";
import Aos from "aos";
import "aos/dist/aos.css";

import CardGroup from "../components/CardGroup";
import EmbeddedVideo from "./EmbeddedVideo";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col">
            <CommonPage />
            <CardGroup />
            <EmbeddedVideo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
