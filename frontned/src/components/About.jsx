import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              SERVED EVERY DAY SINCE 2013

jibi’s opened on Thanksgiving Day 2013. Chef / Owner jibi jen began baking pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of indranagar market complex with 1 outlet. Today, this beloved restaurant and pie shop celebrates 10 years of classic, made from scratch classic Indian and Asian style of cooking.
                          <br />
                          <br />
                          <p><b>Why It's Effective</b></p>
                          <p>Rather than calling itself a “New York institution” or using the word "reliable," Bubby’s uses its headline to make a specific claim — ”Served every day since 1990” — that demonstrates those ideas. This captures more attention and paints a richer, more vivid picture of its history and role in the community.</p>
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="/about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
