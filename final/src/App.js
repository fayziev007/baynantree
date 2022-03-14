import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./components/style.scss";
import Nav from "./components/Navbar/Nav";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import SectionTwo from "./components/Section-2/SectionTwo";
import Footer from "./components/Footer/Footer";
import SectionThree from "./components/SectionThree/SectionThree";
import Card from "./components/CardSection/Card";
import "./components/bootstrap-grid.css";
import Bedroom from "./components/Bedroom/Bedroom";
import Duplex from "./components/Duplex/Duplex";
import Bedroom3 from "./components/Bedroom3/Bedroom3";
import Bedroom2 from "./components/Bedroom2/Bedroom2";
import Penthouse from "./components/Penthouse/Penthouse";
import Bednav from "./components/Bedroom/Bednav";
import SectionFour from "./components/SectionFour/SectionFour";
// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import SectionFive from "./components/SectionFive/SectionFive";
import Aos from "aos";
// import Viewer from 'SectionTwo'
// import "aos/dist/aos.scss";
const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Section />
      <SectionFive />
      <SectionTwo />
      <SectionFour />
      <Bednav />
      <Routes>
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/bedroom2" element={<Bedroom2 />} />
        <Route path="/bedroom3" element={<Bedroom3 />} />
        <Route path="/penthouse" element={<Penthouse />} />
        <Route path="/duplex" element={<Duplex />} />
      </Routes>
      {/* <Card />   */}
      <SectionThree />
      <Footer />
    </div>
  );
};
// const App = () => {

//   return (
// <div>
//   <Nav />
//   <Header />
//   <Section />
//   <SectionTwo />
//   <SectionFour />
//   <Bednav />
//   <Routes>
//     <Route path="/bedroom" element={<Bedroom />} />
//     <Route path="/bedroom2" element={<Bedroom2 />} />
//     <Route path="/bedroom3" element={<Bedroom3 />} />
//     <Route path="/penthouse" element={<Penthouse />} />
//     <Route path="/duplex" element={<Duplex />} />
//   </Routes>
//   {/* <Card /> */}
//   <SectionThree />
//   {/* <Footer /> */}
// </div>
//   );
// };

export default App;
