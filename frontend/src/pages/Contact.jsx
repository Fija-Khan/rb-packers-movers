import React from "react";
import "./Contact.css";

const Contact = () => {
  const phoneNumber = "9730730292";
  const whatsappNumber = "919730730292";

  const whatsappMessage = encodeURIComponent(
    "Hello R B Packers & Movers, I would like to enquire about your packing and moving services."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const googleMapsLink =
    "https://share.google/m0jDydTzzMdPHavvk";

  return (
    <main className="contact-page">

      {/* Contact Header */}
      <section className="contact-header">
        <div className="contact-header-content">
          <span className="contact-tag">CONTACT US</span>

          <h1>
            Get In <strong>Touch</strong>
          </h1>

          <p>
            Planning a move? Get in touch with R B Packers & Movers
            for packing, shifting, labour and transportation services.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-main">
        <div className="contact-wrapper">

          {/* Contact Information */}
          <div className="contact-info">

            <div className="contact-title">
              <span>R B PACKERS & MOVERS</span>

              <h2>
                Contact <strong>Information</strong>
              </h2>
            </div>

            <div className="contact-list">

              {/* Address */}
              <div className="contact-item">
                <div className="contact-icon">📍</div>

                <div className="contact-item-content">
                  <h3>Our Address</h3>

                  <p>
                    Shop No. 1 Qurbaiya Farm,
                    <br />
                    Mumbai Nashik Highway,
                    <br />
                    Padgha, Near Padgha Toll Plaza,
                    <br />
                    Maharashtra - 421101
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href={`tel:${phoneNumber}`}
                className="contact-item contact-link"
              >
                <div className="contact-icon">📞</div>

                <div className="contact-item-content">
                  <h3>Call Us</h3>
                  <p>+91 97307 30292</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item contact-link"
              >
                <div className="contact-icon">💬</div>

                <div className="contact-item-content">
                  <h3>WhatsApp</h3>
                  <p>Chat with our team</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:rbenterprises8171@gmail.com"
                className="contact-item contact-link"
              >
                <div className="contact-icon">✉</div>

                <div className="contact-item-content">
                  <h3>Email Us</h3>
                  <p>rbenterprises8171@gmail.com</p>
                </div>
              </a>

              {/* Service Area */}
              <div className="contact-item">
                <div className="contact-icon">🚚</div>

                <div className="contact-item-content">
                  <h3>Service Area</h3>
                  <p>All India</p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="contact-actions">

              <a
                href={`tel:${phoneNumber}`}
                className="contact-call-btn"
              >
                <span>Call Now</span>
                <strong>→</strong>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp-btn"
              >
                <span>WhatsApp</span>
                <strong>→</strong>
              </a>

            </div>
          </div>

          {/* Location */}
          <div className="contact-location">

            <div className="location-heading">
              <span>FIND US</span>

              <h2>
                Our <strong>Location</strong>
              </h2>
            </div>

            <div className="contact-map">
              <iframe
                title="R B Packers & Movers Location"
                src="https://www.google.com/maps?q=R%20B%20Packers%20%26%20Movers%2C%20Borivali%20Tarf%20Rahur%2C%20Maharashtra%20421101&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="location-bottom">
              <div className="location-address">
                <span>📍</span>

                <p>
                  Padgha, Maharashtra - 421101
                </p>
              </div>

              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="map-button"
              >
                Open in Google Maps
                <strong>↗</strong>
              </a>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Contact;
