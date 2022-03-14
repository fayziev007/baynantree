import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./penthouse.scss";

const Penthouse = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="bosss">
              <Swiper navigation={true} className="mySwiper">
                <SwiperSlide>
                  <h4>type 4A-4,072 sq.ft</h4>
                  <img className="design-1" src="./img/design-3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <h4>type 4B-3,129 sq.ft</h4>
                  <img className="design-2" src="./img/penthouse-2.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Penthouse;
