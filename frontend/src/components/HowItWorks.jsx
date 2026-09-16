import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Send Your Enquiry",
      description:
        "Share your pickup, drop and moving details with our team.",
    },
    {
      number: "02",
      title: "Get Your Quote",
      description:
        "Our team reviews your requirements and provides a suitable quotation.",
    },
    {
      number: "03",
      title: "We Pack & Move",
      description:
        "Our experienced team carefully packs, loads and transports your belongings.",
    },
    {
      number: "04",
      title: "Safe Delivery",
      description:
        "Your belongings are delivered to your new location with proper handling.",
    },
  ];

  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">

        <div className="how-heading">
          <span className="how-tag">HOW IT WORKS</span>

          <h2>
            Moving Made <span>Simple</span>
          </h2>

          <p>
            From enquiry to delivery, we keep your shifting process simple,
            organized and convenient.
          </p>
        </div>

        <div className="how-grid">
          {steps.map((step) => (
            <div className="how-card" key={step.number}>
              <div className="step-number">
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;