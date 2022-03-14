import React, { useRef, useState , useEffect }  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Aos from "aos";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./sectionFive.scss";

const SectionFive = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  return (
    <section id="SectionFive" className="sct">
      <div className="apartment-content">
        <Swiper navigation={true} className="mySwiper">
          <SwiperSlide>
            <img className="hotel-img-2" src="./img/hotel-5.jpg" alt="" />
            <div className="container">
              <div className="apartment-box">
                <h1 data-aos="fade-up">LIVING SPACES</h1>
                <p data-aos="fade-up">
                  step into a harmnoius combination of aesthetics and elegance.
                  The wall-to-wall and floor-to-ceiling windows flood the the
                  residences with natural light creating and extraordinary
                  atmosphere within the 3.2 meters of clear celing hieght
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="hotel-img-2" src="./img/hotel-6.jpg" alt="" />
            <div className="container">
              <div className="apartment-box">
                <h1 >THE LOBBY</h1>
                <p>
                  Enter the residences through a triple height hotel-style lobby
                  lounge, offering impressively grand proportions and a
                  dedicated concierge service to provide Banyan Tree’s signature
                  hospitality
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="hotel-img-2" src="./img/hotel-7.jpg" alt="" />
            <div className="container">
              <div className="apartment-box">
                <h1>signature penthouses</h1>
                <p>
                  The penthouses offer some of the most spectacular living
                  spaces available in Dubai. Each boasting a private built-in
                  cantilevered infinity pool and an expansive open-air
                  entertainment terrace. Occupying a complete floor, the 4.2
                  meter floor-to-ceiling height ensures a spectacular 360-degree
                  view across two golf courses and Dubai’s skyline. A whole new
                  meaning to the concept of luxury.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="hotel-img-2" src="./img/hotel-8.jpg" alt="" />
            <div className="container">
              <div className="apartment-box">
                <h1>THE BEDROOMS</h1>
                <p>
                  Every bedroom features an en-suite bathroom, ample wardrobe
                  space and operable windows. With over 3 meters of clear
                  ceiling height you can enjoy the magnificent views through the
                  floor-to-ceiling and wall-to-wall windows
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SectionFive;
