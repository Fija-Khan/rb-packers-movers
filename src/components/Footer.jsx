import "./Footer.css";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company */}
        <div className="footer-column footer-brand">
          <h2>R B PACKERS AND MOVERS</h2>

          <p className="footer-tagline">
            HOME • OFFICE • COMPANY SHIFTING
          </p>

          <p>
            Reliable packing and moving services with experienced staff
            and smart packing solutions across India.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#quote">Get a Quote</a>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Our Services</h3>

          <a href="#services">Home Shifting</a>
          <a href="#services">Full Packing</a>
          <a href="#services">Labour Service</a>
          <a href="#services">Transportation</a>
          <a href="#services">Warehouse</a>
        </div>

        {/* Contact Us */}
        <div className="footer-column">
          <h3>Contact Us</h3>

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
              SHOP NO 1, qurbaniya farm,
              <br />
              Mumbai Nashik Highway,
              <br />
              Near Padgha Toll Plaza,
              <br />
              421101
            </span>
          </p>

          {/* Google Maps */}
          <a
            href="https://share.google/m0dJydTzzMdPHavvk"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-map"
          >
            <FaMapMarkerAlt />
            <span>View on Google Maps</span>
          </a>

          {/* Social Media Icons */}
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

      {/* Bottom */}
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
