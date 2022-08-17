import React from "react";
import Tilt from "react-parallax-tilt";
import './logo.css'
import brainImg from './brain.png';

const Logo = () => {
  return (
    <div className="Tilt ma3">
      <Tilt className=" br2 shadow-2">
        <div className="Tilt-inner br2 blur-effect">
            <img className="logo-img" src={brainImg} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
