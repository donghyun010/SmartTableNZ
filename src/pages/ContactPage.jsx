import React from "react";
import logo from "../assets/images/DarkLogo.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #0d1b2a, #1b3662, #3d6aa3)",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
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

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 20px",
        }}
      >
        <div
          className="content-wrapper"
          style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}
        >
          {/* Left Side */}
          <div style={{ flex: "1 1 300px" }}>
            <p
              style={{
                color: "#00bcd4",
                fontWeight: "500",
                marginBottom: "10px",
              }}
            >
              Contact Us
            </p>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "700",
                margin: "0 0 20px",
              }}
            >
              How can we help?
            </h1>
            <p style={{ fontSize: "16px", color: "#ccc" }}>
              Let’s kick-start the conversation and discuss your path to
              transformative growth.
            </p>
          </div>

          {/* Right Side (Form) */}
          <div style={{ flex: "1 1 300px" }}>
            <form
              action="https://formspree.io/f/YOUR_FORMSPREE_ID"
              method="POST"
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <label style={{ fontWeight: 500 }}>
                Name<span style={{ color: "#00bcd4" }}> *</span>
              </label>
              <input type="text" name="name" required style={inputStyle} />

              <label style={{ fontWeight: 500 }}>
                Email<span style={{ color: "#00bcd4" }}> *</span>
              </label>
              <input type="email" name="email" required style={inputStyle} />

              <label style={{ fontWeight: 500 }}>Phone</label>
              <input type="tel" name="phone" style={inputStyle} />

              <label style={{ fontWeight: 500 }}>Message</label>
              <textarea
                name="message"
                rows="4"
                required
                style={{ ...inputStyle, resize: "vertical" }}
              />

              {/* reCAPTCHA placeholder */}
              <div
                style={{
                  background: "#fff",
                  padding: "10px",
                  borderRadius: "5px",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                <p style={{ margin: 0 }}>
                  I'm not a robot (reCAPTCHA placeholder)
                </p>
              </div>

              <label style={{ fontSize: "14px" }}>
                <input
                  type="checkbox"
                  required
                  style={{ marginRight: "8px" }}
                />
                I agree to the Smart Table{" "}
                <a
                  href="/privacy-policy"
                  style={{ color: "#00bcd4", textDecoration: "underline" }}
                >
                  Privacy Policy
                </a>
                .
              </label>

              <div style={{ display: "flex", gap: "10px" }}>
                <button type="submit" style={submitButtonStyle}>
                  Submit
                </button>
                <button type="reset" style={resetButtonStyle}>
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const inputStyle = {
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "rgba(255,255,255,0.1)",
  color: "#fff",
};

const submitButtonStyle = {
  padding: "10px 20px",
  backgroundColor: "#00bcd4",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const resetButtonStyle = {
  padding: "10px 20px",
  backgroundColor: "#fff",
  color: "#000",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default ContactPage;
