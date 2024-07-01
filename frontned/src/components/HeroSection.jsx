import React from "react";
import Navbar from "./Navbar";
//import Navbar from "./Navbar";

const HeroSection = () => {
  return (
      <section className="heroSection" id="heroSection">
          <Navbar/>
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Where every flavor tells a story...</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./hero1.png" alt="hero1" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title"></h1>
                <h1 className="title dishes_title">dishes</h1>
                <img src="./threelines.svg" alt="three" />
              </div>
              <img className="logo" src="/download.jpg" alt="logo" />
              <img className="logo" src="/img.png" alt="logo" />
            </div>
            
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="./hero2.avif" alt="hero2" />
          </div>
          <h1 className="title dishes_title">Chicken dinner is a winner...</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;