import React, { useEffect } from "react";
import "./section.scss";
import Aos from "aos";
// import "aos/dist/aos.scss";

const Section = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="sct-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div data-aos="fade-up" className="text-box">
              <h1>relax. rejuvenate. reside.</h1>
              <p>
                With its avant-garde design, state-of-the-art facilities and
                magnificent views overlooking two golf courses and Dubai’s
                skyline, these residences inspire wellbeing, sophistication and
                a holiday atmosphere.
              </p>
              <p>
                This one-of-a-kind development is set to deliver a unique Banyan
                Tree experience to each of the homeowners.
              </p>
              <button className="btn">
                {" "}
                <a href="https://youtu.be/jJ2ykRwMNmg">VIEW VIDEO</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
