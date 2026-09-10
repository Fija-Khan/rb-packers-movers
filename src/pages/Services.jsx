import React from "react";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "HOME SHIFTING",
    description:
      "Complete house shifting support including packing, labour and transportation for a smooth moving process.",
  },
  {
    number: "02",
    title: "FULL PACKING",
    description:
      "Careful packing support for household and other belongings before the shifting process.",
  },
  {
    number: "03",
    title: "LABOUR SERVICE",
    description:
      "Labour support for loading, unloading and handling your belongings during shifting.",
  },
  {
    number: "04",
    title: "TRANSPORTATION",
    description:
      "Transportation support for moving your belongings from the pickup location to the destination.",
  },
  {
    number: "05",
    title: "ALL INDIA SERVICE",
    description:
      "Shifting services available across India for home, office and company relocation requirements.",
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        {/* Section Heading */}
        <div className="services-header">
          <span className="services-label">OUR SERVICES</span>

          <h2>
            HOME • OFFICE •
            <br />
            <span>COMPANY SHIFTING</span>
          </h2>

          <p>
            We provide home, office and company shifting services with packing,
            labour and transportation support across India.
          </p>
        </div>

        {/* Services */}
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.number}>
              <div className="service-top">
                <span className="service-number">{service.number}</span>

                <span className="service-arrow">↗</span>
              </div>

              <div className="service-line"></div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
