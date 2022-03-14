
import React, { useEffect } from "react";
import './sectionTwo.scss'
import Aos from "aos";
const SectionTwo = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
    // const view360 = document.querySelector(".view360");
    // const viewPano = "../img/viewer360.jpg";

    // const panorama = new PANOLENS.ImagePanorama(viewPano);
    // const viewer = new PANOLENS.Viewer({
    //   container: view360,
    //   autoRotate: true,
    // });
    // viewer.add(panorama);
    return (
      <section className="sct-2">
        <div className="container">
          <div className="row">
            <div className=" col-lg-12 col-sm-12 col-md-12">
              <div data-aos="fade-up" className="text-box">
                <h1>views - location</h1>
                <p>
                  Memorable moments deserve panoramic views. Enjoy unmatched
                  views over the iconic Dubai skyline and two lush green golf
                  courses as they become the perfect backdrop to your life.
                </p>
                <button className="btn">360 view</button>{" "}
                <button className="btn-2">location</button>
              </div>
              <div className="viewer360">
                <div id="view360" className="view360">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
} 

export default SectionTwo
