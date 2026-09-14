import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left - Company Photo */}
        <div className="about-image">
          <img
            src={`${import.meta.env.BASE_URL}images/about-us.jpg`}
            alt="R B Enterprises Packers and Movers"
          />
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
            With 6 years of experience in shifting services, R B Enterprises
            provides home, office and company shifting solutions along with
            packing, labour, transportation and warehouse services.
          </p>

          <p>
            Our team focuses on careful packing, proper handling and smooth
            transportation of belongings. From home shifting to office and
            company relocation, we aim to make the moving process simple,
            organized and convenient for every customer.
          </p>

          <p>
            We also provide warehouse services for customers who need a
            convenient space to store their belongings during the shifting
            process.
          </p>

          {/* Company Highlights */}
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
