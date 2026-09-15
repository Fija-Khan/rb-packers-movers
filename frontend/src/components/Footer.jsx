import React from "react";
import "./Footer.css";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const phoneNumber = "9730730292";
  const whatsappNumber = "919730730292";

  const whatsappMessage = encodeURIComponent(
    "Hello R B Packers & Movers, I would like to enquire about your packing and moving services."
  );

  const googleMapsLink =
    "https://share.google/m0dJydTzzMdPHavvk";

  return (
    <footer className="footer">

      {/* =================================
          FOOTER MAIN
      ================================= */}

      <div className="footer-container">

        {/* ==============================
            COMPANY
        ============================== */}

        <div className="footer-column footer-brand">

          <h2>R B PACKERS & MOVERS</h2>

          <p className="footer-tagline">
            HOME • OFFICE • COMPANY SHIFTING
          </p>

          <p>
            Reliable packing and moving services with experienced staff
            and smart packing solutions across India.
          </p>

        </div>


        {/* ==============================
            QUICK LINKS
        ============================== */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/quote">Get a Quote</a>
          <a href="/contact">Contact</a>

        </div>


        {/* ==============================
            SERVICES
        ============================== */}

        <div className="footer-column">

          <h3>Our Services</h3>

          <a href="/services">Home Shifting</a>
          <a href="/services">Full Packing</a>
          <a href="/services">Labour & Transportation</a>

        </div>


        {/* ==============================
            CONTACT
        ============================== */}

        <div className="footer-column">

          <h3>Contact Us</h3>


          {/* Phone */}

          <a
            href={`tel:${phoneNumber}`}
            className="footer-contact-link"
          >
            <FaPhoneAlt />

            <span>+91 97307 30292</span>
          </a>


          {/* WhatsApp */}

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-link"
          >
            <FaWhatsapp />

            <span>WhatsApp Us</span>
          </a>


          {/* Email */}

          <a
            href="mailto:rbenterprises8171@gmail.com"
            className="footer-contact-link"
          >
            <FaEnvelope />

            <span>rbenterprises8171@gmail.com</span>
          </a>


          {/* Address */}

          <p className="footer-address">

            <FaMapMarkerAlt />

            <span>
              Shop No. 1 Qurbaiya Farm,
              <br />
              Mumbai Nashik Highway,
              <br />
              Padgha, Near Padgha Toll Plaza,
              <br />
              Maharashtra - 421101
            </span>

          </p>


          {/* Google Maps */}

          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-map"
          >
            <FaMapMarkerAlt />

            <span>View on Google Maps</span>
          </a>


          {/* Social Media */}

          <div className="footer-contact-social">

            {/* Instagram */}

            <a
              href="https://www.instagram.com/rbshaikhsahab?utm_source=qr&stkn=MWp3MmQ2bmVzMTRzMA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>


            {/* Facebook */}

            <a
              href="https://www.facebook.com/share/17Yqp9t2XB/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>


            {/* YouTube */}

            <a
              href="https://youtube.com/@rbpackersandmovers?si=U2vhBTqplsb8CBIR"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>


      {/* =================================
          FOOTER BOTTOM
      ================================= */}

      <div className="footer-bottom">

        <p>
          © 2026 R B Packers & Movers. All Rights Reserved.
        </p>

        <p>
          Professional Packing & Moving Services Across India
        </p>

      </div>

    </footer>
  );
}

export default Footer;
