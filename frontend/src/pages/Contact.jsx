import React from "react";
import "./Contact.css";

const Contact = () => {
  const phoneNumber = "9730730292";
  const whatsappNumber = "919730730292";

  const whatsappMessage = encodeURIComponent(
    "Hello R B Packers & Movers, I would like to enquire about your packing and moving services."
  );

  const googleMapsLink = "https://share.google/m0jDydTzzMdPHavvk";

  return (
    <main className="contact-page">

      {/* =========================
          CONTACT HEADER
      ========================= */}
      <section className="contact-header">
        <div className="contact-header-content">
          <span>CONTACT US</span>

          <h1>
            Get In <strong>Touch</strong>
          </h1>

          <p>
            Have a question or planning a move? Contact R B Packers & Movers
            and our team will be happy to assist you.
          </p>
        </div>
      </section>

      {/* =========================
          CONTACT INFORMATION + MAP
      ========================= */}
      <section className="contact-main">
        <div className="contact-wrapper">

          {/* =========================
              LEFT — CONTACT INFO
          ========================= */}
          <div className="contact-info">

            <span className="contact-section-label">
              R B PACKERS & MOVERS
            </span>

            <h2>
              Let’s Make Your
              <strong> Move Easy.</strong>
            </h2>

            <p className="contact-intro">
              We provide reliable packing, home shifting, labour and
              transportation services across India.
            </p>

            <div className="contact-list">

              {/* Address */}
              <div className="contact-detail">
                <div className="contact-detail-icon">📍</div>

                <div>
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
                className="contact-detail contact-link"
              >
                <div className="contact-detail-icon">📞</div>

                <div>
                  <h3>Call Us</h3>
                  <p>+91 97307 30292</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail contact-link"
              >
                <div className="contact-detail-icon">💬</div>

                <div>
                  <h3>WhatsApp</h3>
                  <p>Chat with our team</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:rbenterprises8171@gmail.com"
                className="contact-detail contact-link"
              >
                <div className="contact-detail-icon">✉</div>

                <div>
                  <h3>Email Us</h3>
                  <p>rbenterprises8171@gmail.com</p>
                </div>
              </a>

              {/* Service Area */}
              <div className="contact-detail">
                <div className="contact-detail-icon">🚚</div>

                <div>
                  <h3>Service Area</h3>
                  <p>All India</p>
                </div>
              </div>

            </div>

            {/* =========================
                ACTION BUTTONS
            ========================= */}
            <div className="contact-actions">

              <a
                href={`tel:${phoneNumber}`}
                className="contact-call-btn"
              >
                Call Now
                <span>→</span>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp-btn"
              >
                WhatsApp
                <span>→</span>
              </a>

            </div>

          </div>

          {/* =========================
              RIGHT — GOOGLE MAP
          ========================= */}
          <div className="contact-map-wrapper">

            <div className="contact-map-heading">
              <span>FIND US</span>

              <h2>Our Location</h2>
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

            <p className="map-note">
              📍 Padgha, Maharashtra - 421101
            </p>

            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="map-directions-btn"
            >
              Open in Google Maps
              <span>↗</span>
            </a>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Contact;