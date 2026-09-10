import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-brand">R B ENTERPRISES</span>

          <h3>
            <span>•</span> HOME <span>•</span> OFFICE
            <span>•</span> COMPANY SHIFTING
          </h3>

          <p className="hero-services">
            <span>•</span>HOME SHIFTING <span>•</span> FULL PACKING
            <br />
            <span>•</span>LABOUR & TRANSPORTATION SERVICE
          </p>

          <div className="hero-buttons">
            <a href="#quote" className="hero-btn primary-btn">
              GET FREE QUOTE
            </a>

            <a href="tel:9730730292" className="hero-btn secondary-btn">
              CALL NOW
            </a>
          </div>
        </div>

        <div className="hero-banner">
          <img
            src="/images/rb-banner.jpg"
            alt="R B Enterprises - Home Office Company Shifting"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
