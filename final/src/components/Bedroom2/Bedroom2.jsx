import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./bedroom2.scss";

const Bedroom2 = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="bosss">
              <Swiper navigation={true} className="mySwiper">
                <SwiperSlide>
                  <h4>type 2A-1,471 sq.ft</h4>
                  <img className="design-1" src="./img/design.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <h4>type 2B-1,458 sq.ft</h4>
                  <img className="design-1" src="./img/BEDROOM2-2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <h4>type 2C-1,445 sq.ft</h4>
                  <img className="design-1" src="./img/BEDROOM2-3.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bedroom2;
