import React from "react";
import AxiosGitaApi from "./AxiosGitaApi";
import Parallax from "react-rellax";
const Index = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <Parallax speed={4}>
              <h2 id="indexh1" className="text-center mx-auto">
                Bhagavad Gita : The Song By God
              </h2>
            </Parallax>
            <AxiosGitaApi />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
