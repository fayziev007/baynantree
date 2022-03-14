import React from 'react';
import './bedroom.scss'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const Bedroom = () => {
  return (
    <div className="sct-3">
      <div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="bosss">
                  <Swiper navigation={true} className="mySwiper">
                    <SwiperSlide>
                      <h4>type 2C-3,080 sq.ft</h4>
                      <img className="design-1" src="./img/bedroom.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4>type 2C-3,080 sq.ft</h4>
                      <img className="design-1" src="./img/bedroom-2.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4>type 2B-2,163 sq.ft</h4>
                      <img className="design-1" src="./img/bedroom-3.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <h4>type 2C-1,445 sq.ft</h4>
                      <img className="design-1" src="./img/bedroom-4.png" alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bedroom;
