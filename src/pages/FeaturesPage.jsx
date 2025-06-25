import React from "react";
import logo from "../assets/images/DarkLogo.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

import image1 from "../assets/images/POS Image 1.png";
import image2 from "../assets/images/POS Image 2.png";
import image3 from "../assets/images/POS Image 3.png";
import kdsImage1 from "../assets/images/KDS Image 1.png";
import kdsImage2 from "../assets/images/KDS Image 2.png";
import kdsImage3 from "../assets/images/KDS Image 3.png";

import "./FeaturesPage.css";

const FeaturesPage = () => {
  const posFeatures = [
    {
      title: "TABLE MANAGEMENT",
      image: image1,
    },
    {
      title: "MENU CUSTOMISATION",
      image: image2,
    },
    {
      title: "SYNC WITH KDS",
      image: image3,
    },
  ];

  const kdsFeatures = [
    {
      title: "ORDER MANAGEMENT",
      image: kdsImage1,
    },
    {
      title: "MULTIPLE KDS",
      image: kdsImage2,
    },
    {
      title: "SYNC WITH POS",
      image: kdsImage3,
    },
  ];

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
      <section className="features-pos-section">
        <div className="content-wrapper">
          <h2 className="section-title">Point of Sales (POS)</h2>
          <hr className="section-divider" />

          <p className="features-section-subtitle">
            Tailor Smart Table to fit your restaurant’s exact needs
          </p>

          <div className="features-card-grid">
            {posFeatures.map((item, i) => (
              <div className="features-card" key={i}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="features-card-img"
                />
                <div className="features-card-text">
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-kds-section">
        <div className="content-wrapper">
          <h2 className="section-title">Kitchen Display System (KDS)</h2>
          <hr className="section-divider" />

          <p className="features-section-subtitle">
            STREAMLINE BACK-OF-HOUSE OPERATIONS WITH DIGITAL SCREENS – NO MORE
            PAPER DOCKETS
          </p>

          <div className="features-card-grid">
            {kdsFeatures.map((item, i) => (
              <div className="features-card" key={i}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="features-card-img"
                />
                <div className="features-card-text">
                  <h4>{item.title}</h4>
                </div>
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
