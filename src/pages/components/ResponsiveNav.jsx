import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ResponsiveNav.css";

const ResponsiveNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="responsive-nav-links">
      {/* Desktop Navigation */}
      <div className="responsive-desktop-nav">
        <Link to="/" className="responsive-nav-link">
          Home
        </Link>
        <div className="responsive-dropdown">
          <Link
            to="/Features"
            className="responsive-dropdown-toggle responsive-nav-link"
          >
            Features
          </Link>
          <div className="responsive-dropdown-content">
            <Link
              to="/Features#operations"
              className="responsive-dropdown-link"
            >
              Restaurant Operations
            </Link>
            <Link to="/Features#front" className="responsive-dropdown-link">
              Front-of-House Features
            </Link>
            <Link to="/Features#addons" className="responsive-dropdown-link">
              Optional Add-Ons
            </Link>
          </div>
        </div>
        <Link to="/pricing" className="responsive-nav-link">
          Pricing
        </Link>
        <Link to="/contact" className="responsive-nav-link">
          Contact
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className={`responsive-hamburger ${
          isMobileMenuOpen ? "responsive-hamburger-open" : ""
        }`}
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="responsive-hamburger-line"></span>
        <span className="responsive-hamburger-line"></span>
        <span className="responsive-hamburger-line"></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`responsive-mobile-nav ${
          isMobileMenuOpen ? "responsive-mobile-nav-open" : ""
        }`}
      >
        <div className="responsive-mobile-nav-content">
          <Link
            to="/"
            className="responsive-mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <div className="responsive-mobile-dropdown">
            <span className="responsive-mobile-dropdown-title">Features</span>
            <div className="responsive-mobile-dropdown-links">
              <Link
                to="/Features#operations"
                className="responsive-mobile-nav-link"
                onClick={closeMobileMenu}
              >
                Restaurant Operations
              </Link>
              <Link
                to="/Features#front"
                className="responsive-mobile-nav-link"
                onClick={closeMobileMenu}
              >
                Front-of-House Features
              </Link>
              <Link
                to="/Features#addons"
                className="responsive-mobile-nav-link"
                onClick={closeMobileMenu}
              >
                Optional Add-Ons
              </Link>
            </div>
          </div>
          <Link
            to="/pricing"
            className="responsive-mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="responsive-mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="responsive-mobile-overlay"
          onClick={closeMobileMenu}
        ></div>
      )}
    </div>
  );
};

export default ResponsiveNav;
