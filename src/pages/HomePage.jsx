import React from "react";
import logo from "../assets/images/DarkLogo.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./HomePage.css";

const HomePage = () => {
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

      <section className="full-banner">
        <div className="banner-content">
          <h1>
            ELEVATE DINING
            <br />
            SIMPLIFY OPERATIONS
          </h1>
          <p>
            Enhance your customers' experience while reducing costs and
            increasing efficiency with Smart Table
          </p>
          <a href="/contact" className="banner-button">
            CONTACT US
          </a>
        </div>
      </section>

      <section className="why-smart-table">
        <div className="content-wrapper">
          <h2 className="section-title">Why Choose Smart Table?</h2>
          <hr className="section-divider" />
          <div className="benefits-grid">
            {[
              {
                title: "Speed Up Service",
                desc: "Reduce wait times and serve more customers with faster, more efficient ordering and processing.",
              },
              {
                title: "Cut Down Costs",
                desc: "Lower your labor expenses by automating routine tasks with integrated technology.",
              },
              {
                title: "All-in-One System",
                desc: "POS, KDS, QR ordering, loyalty programs, and more—all managed in a single platform.",
              },
              {
                title: "Boost Customer Experience",
                desc: "Interactive, contactless, and personalized—customers enjoy smooth and modern dining.",
              },
              {
                title: "Actionable Insights",
                desc: "Access powerful analytics to make data-driven decisions and grow your business.",
              },
              {
                title: "Scalable & Flexible",
                desc: "Whether you're a small cafe or a multi-location chain, Smart Table grows with you.",
              },
            ].map((benefit, i) => (
              <div className="benefit-card" key={i}>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="content-wrapper">
          <h2 className="section-title">Features</h2>
          <hr className="section-divider" />
          <div className="benefits-grid">
            {[
              {
                title: "POINT OF SALES (POS)",
                desc: "Fully customise your table layout and menu anytime – quickly, easily and exactly how you want it.",
              },
              {
                title: "KITCHEN DISPLAY SYSTEM (KDS)",
                desc: "Seamlessly sync with the POS to simplify order management, with the flexibility to split KDS screens by section or station—customising each view to suit your workflow.",
              },
              {
                title: "MULTIPLE POS & KDS",
                desc: "Use unlimited POS & KDS devices across your venue – all included, always in sync.",
              },
              {
                title: "ONLINE ORDERING & RESERVATION",
                desc: "Online ordering and reservation integrated with POS & KDS.",
              },
              {
                title: "QR ORDERING",
                desc: "Contactless table-side ordering integrated with POS & KDS.",
              },
              {
                title: "SALES ANALYTICS",
                desc: "Gain actionable insights into your restaurant's performance.",
              },
              {
                title: "INVENTORY MANAGEMENT",
                desc: "Manage your stock easily.",
              },
              {
                title: "LOYALTY PROGRAM",
                desc: "Custom loyalty and voucher tools for customers, staff, and companies.",
              },
              {
                title: "DELIVERY SERVICES",
                desc: "Integrated delivery services including Uber Eats and DoorDash.",
              },
            ].map((feature, i) => (
              <div className="benefit-card" key={i}>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="highlighted-feature">
        <div className="content-wrapper kiosk-layout">
          <div className="kiosk-text">
            <h2 className="section-title">
              Optional Add-On: Table Order Kiosk
            </h2>
            <hr className="section-divider" />
            <p>
              Our Table Order Kiosk system transforms dining with securely
              mounted tablets at each table. This premium solution streamlines
              operations, speeds up service, and enhances the customer
              experience with seamless interactive ordering.
            </p>
          </div>
          <div className="kiosk-image">
            <img
              src={require("../assets/images/Table Kiosk.png")}
              alt="Table Order Kiosk"
            />
          </div>
        </div>
      </section>

      <section className="ready-to-start">
        <div className="content-wrapper">
          <h2 className="section-title">Ready to get Started?</h2>
          <hr className="section-divider" />

          <div className="demo-content">
            <p>
              Book a free demo with us today and see how Smart Table can
              transform your operations.
            </p>
            <a
              href="/contact"
              className="cta-button"
              style={{ marginTop: "30px", display: "inline-block" }}
            >
              Request a Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
