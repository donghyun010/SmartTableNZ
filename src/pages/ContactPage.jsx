import React from "react";
import logo from "../assets/images/DarkLogo.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

const ContactPage = () => {
  return (
    <div>
      <header>
        <div className="header-box">
          <nav>
            <div className="logo">
              <img src={logo} alt="Smart Table Logo" />
            </div>
            <Header />
          </nav>
        </div>
      </header>

      <section className="section white-bg">
        <h1 style={{ textAlign: "center" }}>Contact Us</h1>
        <div
          className="contact-form"
          style={{ maxWidth: "900px", margin: "0 auto" }}
        >
          <form
            action="https://formspree.io/f/yourformid" // 🔁 Replace with your actual Formspree form ID
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
            <a href="mailto:contact@smarttable.co.nz">
              contact@smarttable.co.nz
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
