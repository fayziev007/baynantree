import React, {useEffect } from "react";
import Aos from "aos";

import "./sectionThree.scss";

const SectionThree = () => {
      useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div id="SectionThree" className="container">
      <div data-aos="fade-up" className="row">
        <div className=" col-lg-5 col-md-5 col-sm-12">
          <div>
            <img className="img-1" src="./img/img.jpg" alt="" />
          </div>
        </div>
        <div className=" col-lg-7 col-md-6 7col-sm-12">
          <div className="boss-title">
            <div className="title-1">
              <h1>now open</h1>
              <h2>for sales</h2>
            </div>
            <div className="title-2">
              <h2>sales centre</h2>
              <h4> 2803, Banyan Tree Residences - Dubai</h4>
              <h4>Sunday to Thursday : 9am - 6pm</h4>
            </div>
            <div className="title-3">
              <h4>sales@banyantreeresidences.ae</h4>
              <h4>+971 4 565 5051</h4>
            </div>
            <div className="title-4">
              <h4>Head Office</h4>
              <h3>Office 101, The Edge, Dubai Internet City</h3>
              <h3>P. O. Box 500516 - Dubai, UAE</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
