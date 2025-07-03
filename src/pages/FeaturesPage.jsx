import React, { useState } from "react";
import logo from "../assets/images/DarkLogo.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

import image1 from "../assets/images/POS Image 1.png";
import image2 from "../assets/images/POS Image 2.png";
import image3 from "../assets/images/POS Image 3.png";
import kdsImage1 from "../assets/images/KDS Image 1.png";
import kdsImage2 from "../assets/images/KDS Image 2.png";
import kdsImage3 from "../assets/images/KDS Image 3.png";
import Image10 from "../assets/images/Image 1.jpg";
import Image11 from "../assets/images/Image 2.jpg";

import "./FeaturesPage.css";

const tabFeatures = {
  operations: [
    {
      title: "POS & KDS Syncing",
      content:
        "Real-time communication between POS and kitchen systems for order accuracy.",
    },
    {
      title: "Sales & Analytics",
      content:
        "Access daily reports and performance insights to make better decisions.",
    },
    {
      title: "Inventory Management",
      content:
        "Track ingredients and item availability to avoid shortages and waste.",
    },
    {
      title: "Delivery Integration",
      content:
        "Connect with platforms like Uber Eats or DoorDash to fulfill delivery orders.",
    },
  ],
  front: [
    {
      title: "QR Code Ordering",
      content:
        "Allow customers to scan and order directly from the table using their phones.",
    },
    {
      title: "Online Ordering",
      content: "Let customers place takeout orders from your website or app.",
    },
    {
      title: "Online Reservations",
      content:
        "Allow diners to book tables online with real-time availability.",
    },
  ],
  addons: [
    {
      title: "Loyalty Program",
      content:
        "Encourage repeat visits with point-based rewards and member-exclusive deals.",
    },
  ],
};

const FeaturesPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("operations");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const posFeatures = [
    { title: "TABLE MANAGEMENT", image: image1 },
    { title: "MENU CUSTOMISATION", image: image2 },
    { title: "SYNC WITH KDS", image: image3 },
  ];

  const kdsFeatures = [
    { title: "ORDER MANAGEMENT", image: kdsImage1 },
    { title: "MULTIPLE KDS", image: kdsImage2 },
    { title: "SYNC WITH POS", image: kdsImage3 },
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
            TAILOR SMART TABLE TO FIT YOUR RESTAURANT'S EXACT NEEDS
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

      <section className="features-tabs-section">
        <div className="content-wrapper">
          <h2 className="features-tab-title">Smart Table Features Overview</h2>

          <div className="features-tab-buttons">
            {["operations", "front", "addons"].map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
                onClick={() => {
                  setActiveTab(tab);
                  setExpandedIndex(null); // Reset expansion when switching tab
                }}
              >
                {
                  {
                    operations: "Restaurant Operations",
                    front: "Front-of-House Features",
                    addons: "Optional Add-ons",
                  }[tab]
                }
              </button>
            ))}
          </div>

          <div className="features-tab-content-row">
            {/* Left Side Image */}
            <div className="tab-image">
              <img
                src={
                  {
                    operations: Image10,
                    front: Image11,
                    addons: Image11,
                  }[activeTab]
                }
                alt="Tab Feature Visual"
              />
            </div>

            {/* Right Side Accordion Content */}
            <div className="tab-text-block">
              <h3 className="tab-subtitle">
                {
                  {
                    operations: "Robust Restaurant Management Tools",
                    front: "A Customer-Centric Approach",
                    addons: "Expand Your Capabilities",
                  }[activeTab]
                }
              </h3>

              {tabFeatures[activeTab].map((feature, i) => (
                <div
                  key={i}
                  className={`accordion-item ${
                    expandedIndex === i ? "open" : ""
                  }`}
                  onClick={() =>
                    setExpandedIndex(expandedIndex === i ? null : i)
                  }
                >
                  <div className="accordion-header">
                    <span className="icon-left">✔</span>
                    <span className="accordion-title">{feature.title}</span>
                    <span className="icon-right">
                      {expandedIndex === i ? "▾" : "▸"}
                    </span>
                  </div>
                  {expandedIndex === i && (
                    <div className="accordion-content">{feature.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="features-split-section">
        <div className="content-wrapper feature-row">
          <div className="feature-image-block">
            <img
              src={Image10}
              alt="POS Interface"
              className="feature-side-image"
            />
          </div>

          <div className="feature-text-block center-text-block">
            <h2>Point of Sales (POS)</h2>
            {[
              {
                title: "Table Management",
                content:
                  "Manage tables visually, update availability in real-time, and improve front-of-house efficiency.",
              },
              {
                title: "Menu Customisation",
                content:
                  "Create unique menu layouts, hide/show items, and tailor selections to different times or areas.",
              },
              {
                title: "Sync With KDS",
                content:
                  "Orders flow instantly to the kitchen with no delay or confusion.",
              },
              {
                title: "Multiple Payment Methods",
                content:
                  "Accept EFTPOS, QR Pay, cash, and split payments with a seamless checkout experience.",
              },
            ].map((item, index) => (
              <div
                className={`accordion-item ${
                  openIndex === index ? "open" : ""
                }`}
                key={index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="accordion-header">
                  <span className="icon-left">✔</span>
                  <span className="accordion-title">{item.title}</span>
                  <span className="icon-right">&#8250;</span>
                </div>
                {openIndex === index && (
                  <div className="accordion-content">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-split-section">
        <div className="content-wrapper feature-row">
          <div className="feature-text-block center-text-block">
            <h2>Kitchen Display System (KDS)</h2>
            {[
              {
                title: "Order Management",
                content:
                  "Track all incoming orders clearly and manage them in real-time.",
              },
              {
                title: "Multiple KDS",
                content:
                  "Assign different screens for different sections – e.g., grill, bar, or dessert.",
              },
              {
                title: "Sync With POS",
                content:
                  "Seamless order transmission from front-of-house to kitchen screens.",
              },
            ].map((item, index) => (
              <div
                className={`accordion-item ${
                  openIndex === index + 4 ? "open" : ""
                }`} // offset by 4
                key={index + 4}
                onClick={() =>
                  setOpenIndex(openIndex === index + 4 ? null : index + 4)
                }
              >
                <div className="accordion-header">
                  <span className="icon-left">✔</span>
                  <span className="accordion-title">{item.title}</span>
                  <span className="icon-right">&#8250;</span>
                </div>
                {openIndex === index + 4 && (
                  <div className="accordion-content">{item.content}</div>
                )}
              </div>
            ))}
          </div>

          <div className="feature-image-block">
            <img
              src={Image11}
              alt="KDS Interface"
              className="feature-side-image"
            />
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
