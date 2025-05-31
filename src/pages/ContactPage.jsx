import { Link } from "react-router-dom";
import logo from "../assets/images/DarkLogo.png";

const ContactPage = () => {
  return (
    <div>
      <header>
        <div className="header-box">
          <nav>
            <div className="logo">
                <img src={logo} alt="Smart Table Logo" />
            </div>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <div className="dropdown">
                <Link to="/products" className="dropdown-toggle">Product & Services</Link>
                <div className="dropdown-content">
                  <a href="/products#kiosk">Table Kiosk</a>
                  <a href="/products#pos">Point of Sales (POS)</a>
                  <a href="/products#kds">Kitchen Display System (KDS)</a>
                  <a href="/products#qr">QR Code Ordering</a>
                  <a href="/products#online-ordering">Online Ordering</a>
                  <a href="/products#reservation">Online Reservation</a>
                </div>
              </div>
              <Link to="/pricing">Pricing</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="top-curve">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#f4f4f4"
            d="M0,160L80,138.7C160,117,320,75,480,90.7C640,107,800,181,960,181.3C1120,181,1280,107,1360,69.3L1440,32V0H0Z"
          ></path>
        </svg>
      </div>

      <section className="section">
        <h1 style={{ textAlign: "center" }}>Contact Us</h1>
        <div className="contact-form" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <form
            action="https://formspree.io/f/yourformid" // Replace with your actual Formspree form ID
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#1b3662",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Or email us directly at{" "}
            <a href="mailto:contact@smarttable.co.nz">contact@smarttable.co.nz</a>
          </p>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Smart Table. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
