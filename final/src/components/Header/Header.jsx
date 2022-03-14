import React from "react";
import "./header.scss";
import video from "./video.mp4";
const Header = () => {
  return (
    <video style={{ width: "100%" }} autoPlay muted loop id="Header">
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default Header;
