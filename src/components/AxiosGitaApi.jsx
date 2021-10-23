import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Aos from "aos";
import Parallax from "react-rellax";

const AxiosGitaApi = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const Gita = useRef(() => {});

  const [pic, setPic] = useState("");
  const [chapter, setChapter] = useState("");
  const [shlok, setShlok] = useState("");
  const [chapterFromButtonClick, setChapterFromButtonClick] = useState(1);
  const [shlokFromButtonClick, setShlokFromButtonClick] = useState(1);

  let { REACT_APP_API_KEY, REACT_APP_URL } = process.env;
  Gita.current = async () => {
    const resposne = await axios.get(
      `${REACT_APP_URL}?ch=${chapterFromButtonClick}&sl=${shlokFromButtonClick}&api_key=${REACT_APP_API_KEY}`
    );
    setPic(resposne.config.url);
  };

  const handleClick = () => {
    setChapterFromButtonClick(chapter);
    setShlokFromButtonClick(shlok);
  };

  useEffect(() => {
    Gita.current();
  }, [shlokFromButtonClick]);

  return (
    <>
      <div className="indexPage">
        <div className="card text-center">
          <Parallax speed={1}>
            <div className="card-header">
              <div className="card">
                <div className="searchBox row">
                  <div data-aos="fade-up" className="col-sm">
                    <input
                      type="Number"
                      placeholder="Chapter No."
                      className="inputBox"
                      id="search"
                      value={chapter}
                      onChange={(event) => setChapter(event.target.value)}
                    />
                  </div>
                  <div data-aos="fade-up" className="col-sm">
                    <input
                      type="Number"
                      placeholder="Shlok No."
                      className="inputBox"
                      id="search"
                      value={shlok}
                      onChange={(event) => setShlok(event.target.value)}
                    />
                  </div>
                  <div data-aos="fade-up" className="col-sm">
                    <button className="Getbutton" onClick={handleClick}>
                      Get Shlok
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
          <div className="card-body imagebox">
            <h5 data-aos="fade-up" className="card-title">
              "जय श्री कृष्णा"
            </h5>
            <p className="card-text">
              <img src={pic} className="img-fluid" alt="shlok" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AxiosGitaApi;
