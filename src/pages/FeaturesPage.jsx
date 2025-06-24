import React from "react";
import logo from "../assets/images/DarkLogo.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./FeaturesPage.css";

const FeaturesPage = () => {
  return (
    <>
      <div className="banner-header">
        <div className="header-box">
          <nav>
            <div className="logo">
              <img src={logo} alt="Smart Table Logo" />
            </div>
            <Header />
          </nav>
        </div>
      </div>

      <section className="section pos-feature-section">
        <div className="content-wrapper">
          <h2 className="section-title">Point of Sales (POS)</h2>
          <hr className="section-divider" />

          <p className="section-subtitle">
            Tailor Smart Table to fit your restaurant’s exact needs
          </p>

          <div className="feature-card-grid">
            {[
              {
                title: "TABLE MANAGEMENT",
                desc: "Customise table layouts to match your exact floor plan.",
              },
              {
                title: "MENU CUSTOMISATION",
                desc: "Edit and organise your menu with flexible categories and modifiers.",
              },
              {
                title: "SYNC WITH KDS",
                desc: "Instant cloud-based syncing between POS and kitchen screens.",
              },
              {
                title: "MULTIPLE PAYMENT METHODS",
                desc: "Offer multiple payment options for faster checkout and happy customers.",
              },
            ].map((item, i) => (
              <div className="pos-feature-card" key={i}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ready-to-start">
        <div className="content-wrapper">
          <h2 className="section-title">Interested in Smart Table?</h2>
          <hr className="section-divider" />
          <p>
            Book a free demo and discover how Smart Table’s core features can
            transform your restaurant operations.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FeaturesPage;
