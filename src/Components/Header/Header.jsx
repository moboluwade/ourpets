import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <span className="logo">Our<span>Pets</span></span>
      <div className="navigation">
        <a href="" className="home"><span>home</span></a>
        <a href="" className="intro"><span>intro</span></a>
        <a href="" className="services"><span>services</span></a>
        <a href="" className="review"><span>review</span></a>
        <a href="" className="contact"><span>contact</span></a>
      </div>
    </div>
  );
};

export default Header;
