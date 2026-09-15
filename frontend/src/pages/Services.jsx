import React from "react";
import "./Services.css";


const services = [
  {
    number: "01",
    title: "HOME SHIFTING",
    image: `${import.meta.env.BASE_URL}images/home-shifting.jpg`,
    description:
      "Complete home shifting support with careful packing, loading, transportation and unloading.",
  },
  {
    number: "02",
    title: "FULL PACKING",
    image: `${import.meta.env.BASE_URL}images/full-packing.jpg`,
    description:
      "Professional packing support to keep your household belongings protected during the move.",
  },
  {
    number: "03",
    title: "LABOUR SERVICE",
    image: `${import.meta.env.BASE_URL}images/labour-service.jpg`,
    description:
      "Reliable labour support for loading, unloading and careful handling of your belongings.",
  },
  {
    number: "04",
    title: "TRANSPORTATION",
    image: `${import.meta.env.BASE_URL}images/transportation.jpg`,
    description:
      "Safe transportation support for moving your belongings from pickup location to destination.",
  },
  {
    number: "05",
    title: "WAREHOUSE",
    image: `${import.meta.env.BASE_URL}images/warehouse.jpg`,
    description:
      "Convenient warehouse support for storing your belongings during the shifting process.",
  },
];


const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        {/* Center Heading */}
        <div className="services-heading">
          <span className="services-label">OUR SERVICES</span>

          <h2>
            MOVING MADE
            <br />
            <span>SIMPLE &amp; SAFE</span>
          </h2>

          <p>
            From packing your belongings to delivering them safely,
            we provide complete moving support for homes, offices
            and companies across India.
          </p>
        </div>

        {/* Services Cards */}
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.number}>

              {/* Image */}
              <div className="service-image">
                <img
                  src={service.image}
                  alt={service.title}
                />

                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-arrow">↗</span>
              </div>

              {/* Content */}
              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
