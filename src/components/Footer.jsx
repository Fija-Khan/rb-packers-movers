import "./Footer.css";

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
          <a href="#services">Labour</a>
          <a href="#services">Transportation</a>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <a href="tel:+919999999999">
            📞 Call Us
          </a>

          <a href="mailto:rbenterprises8171@gmail.com">
            ✉ rbenterprises8171@gmail.com
          </a>

          <p>
            📍 Padgha, Maharashtra
          </p>

          <a
            href="https://wa.me/919730730292"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            WhatsApp Us
          </a>
        </div>

      </div>

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