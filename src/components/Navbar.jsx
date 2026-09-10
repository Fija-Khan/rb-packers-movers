import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo / Brand */}
        <a href="/" className="brand" onClick={closeMenu}>
          <img src={logo} alt="R B ENTERPRISES" className="brand-logo" />

          <div className="brand-text">
            <strong>R B </strong>
            <span>ENTERPRISES</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#quote">Get Free Quote</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Desktop Contact Buttons */}
        <div className="nav-actions">
          <a href="tel:9730730292" className="call-button">
            Call Now
          </a>

          <a
            href="https://wa.me/919730730292"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-button"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Side Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav className="mobile-nav-links">
          <a href="/" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#quote" onClick={closeMenu}>
            Get Free Quote
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <div className="mobile-actions">
          <a
            href="tel:9730730292"
            className="mobile-call-button"
            onClick={closeMenu}
          >
            Call Now
          </a>

          <a
            href="https://wa.me/919730730292"
            target="_blank"
            rel="noreferrer"
            className="mobile-whatsapp-button"
            onClick={closeMenu}
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Dark overlay */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </header>
  );
}

export default Navbar;
