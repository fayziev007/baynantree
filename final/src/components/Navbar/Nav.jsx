import React from "react";
import "./nav.scss";
const Nav = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("navbar-2").style.padding = "20px 20px";
      // document.getElementById("logo").style.fontSize = "25px";
    } else {
      document.getElementById("navbar-2").style.padding = "10px 10px";
      // document.getElementById("logo").style.fontSize = "35px";
    }
  }
  return (
    <nav id="navbar-2" className="navbar-1">
      <h1>Baynan Tree</h1>
      <ul>
        <li><a href="#Header">banyan tree</a></li>
        <li>
          {" "}
          <a href="#SectionFive">amenities</a>
        </li>
        <li>
          {" "}
          <a href="#SectionFour">residences</a>
        </li>
        <li>
          {" "}
          <a href="#CardSection">sales</a>
        </li>
        <li>
          {" "}
          <a href="#SectionThree">contact us</a>
        </li>
      </ul>
      <div className="btn-box">
        <button className="btn">REGISTER</button>
        <button className="btn">CALL NOW</button>
      </div>
    </nav>
  );
};

export default Nav;
