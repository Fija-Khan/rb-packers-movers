import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left - Company Photo */}
        <div className="about-image">
          <img src="/images/about-us.jpg" alt="Packers and Movers" />
        </div>

        {/* Right - About Content */}
        <div className="about-content">
          <span className="about-label">ABOUT US</span>

          <h2>
            MOVING HOMES
            <br />
            <span>WITH CARE</span>
          </h2>

          <p className="about-intro">
            With 6 years of experience in house shifting, we provide packing,
            labour and transportation services across India.
          </p>

          <p>
            Our team focuses on careful packing, proper handling and smooth
            transportation of household belongings. We aim to make the shifting
            process simple and convenient for every customer.
          </p>

          {/* Real Company Highlights */}
          <div className="about-info">
            <div className="about-info-item">
              <strong>6+</strong>
              <span>YEARS EXPERIENCE</span>
            </div>

            <div className="about-info-item">
              <strong>ALL INDIA</strong>
              <span>SERVICE AREA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
