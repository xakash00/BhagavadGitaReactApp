import React, { useEffect } from "react";
import Aos from "aos";

const EmbeddedVideo = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div>
        <div className="embedVideo container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div data-aos="fade-up" className="col-10 col-sm-8 col-lg-6 ">
              <iframe
              title="isckon video"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/z2_39vsQ6VE"
              ></iframe>
            </div>
            <div data-aos="fade-up" className="HomeQuote col-lg-6">
              <p className=" lead">
                "The power of God is with you at all times; through the
                activities of mind, senses, breathing, and emotions; and is
                constantly doing all the work using you as a mere instrument.
                <span>
                  <i className="fas fa-quote-right"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmbeddedVideo;
