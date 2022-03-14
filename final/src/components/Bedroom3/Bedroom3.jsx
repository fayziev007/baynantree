import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./bedroom3.scss";

const Bedroom3 = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="bosss">
              <Swiper navigation={true} className="mySwiper">
                <SwiperSlide>
                  <h4>type 3A-2,202 sq.ft</h4>
                  <img className="design-1" src="./img/design-2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <h4>type 3B-2,341 sq.ft</h4>
                  <img className="design-1" src="./img/bedroom3-2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <h4>type 3C-2,409 sq.ft</h4>
                  <img className="design-1" src="./img/bedroom3-3.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bedroom3;
