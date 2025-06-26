import React from "react";
import logo from "../assets/images/DarkLogo.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";
import "./HomePage.css";
import ClickableFeatureSection from "./components/ClickableFeatureSection";

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

          <div className="feature-card-grid">
            {[
              {
                title: "POINT OF SALES (POS)",
                desc: "Fully customise your table layout and menu anytime – quickly, easily and exactly how you want it.",
                img: require("../assets/images/Feature POS.png"), // <-- updated image
              },
              {
                title: "KITCHEN DISPLAY SYSTEM (KDS)",
                desc: "Seamlessly sync with the POS to simplify order management, with the flexibility to split KDS screens by section or station—customising each view to suit your workflow.",
                img: require("../assets/images/Image 6.jpg"),
              },
              {
                title: "MULTIPLE POS & KDS",
                desc: "Use unlimited POS & KDS devices across your venue – all included, always in sync.",
                img: require("../assets/images/Image 7.jpg"),
              },
              {
                title: "ONLINE ORDERING & RESERVATION",
                desc: "Online ordering and reservation integrated with POS & KDS.",
                img: require("../assets/images/Image 4.jpg"),
              },
              {
                title: "QR ORDERING",
                desc: "Contactless table-side ordering integrated with POS & KDS.",
                img: require("../assets/images/Image 1.jpg"),
              },
              {
                title: "SALES ANALYTICS",
                desc: "Gain actionable insights into your restaurant's performance.",
                img: require("../assets/images/Image 8.jpg"),
              },
              {
                title: "INVENTORY MANAGEMENT",
                desc: "Manage your stock easily.",
                img: require("../assets/images/Image 3.jpg"),
              },
              {
                title: "LOYALTY PROGRAM",
                desc: "Custom loyalty and voucher tools for customers, staff, and companies.",
                img: require("../assets/images/Image 4.jpg"),
              },
              {
                title: "DELIVERY SERVICES",
                desc: "Integrated delivery services including Uber Eats and DoorDash.",
                img: require("../assets/images/Image 1.jpg"),
              },
            ].map((feature, i) => (
              <div className="feature-card" key={i}>
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="feature-card-image"
                />
                <div className="feature-card-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
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

      <section className="section">
        <div className="content-wrapper">
          <h2 className="section-title">
            Smart Ordering in 3 Steps Using Table Kiosk
          </h2>
          <hr className="section-divider" />
          <ImageCarousel />
        </div>
      </section>

      <section className="section">
        <div className="content-wrapper">
          <h2 className="section-title">FAQ on Table Kiosk</h2>
          <hr className="section-divider" />
          <div className="faq-list">
            {[
              {
                question:
                  "Can Smart Table Kiosk integrate with existing POS systems?",
                answer:
                  "No, it cannot. The Smart Table Kiosk includes a fully integrated POS and Kitchen Display System (KDS), ensuring seamless connectivity and efficient restaurant operations.",
              },
              {
                question: "Does Smart Table Kiosk support multiple languages?",
                answer:
                  "Yes, we currently support English, Korean, and Chinese. If you require additional languages, please reach out to us for customization options.",
              },
              {
                question:
                  "Is internet connectivity required for the Smart Table Kiosk to function?",
                answer:
                  "Yes, an internet connection is required for the Smart Table to function properly. However, if the connection is lost, the table kiosks will automatically display QR codes to allow customers to continue ordering without disruption.",
              },
              {
                question: "What happens if the Smart Table malfunctions?",
                answer:
                  "While we prioritise reliability, in the rare event of a malfunction, our 24/7 online management support is available to ensure uninterrupted restaurant operations.",
              },
              {
                question: "How can I get a Smart Table for my business?",
                answer:
                  "Contact us today, and our team will get back to you as soon as possible! Email us at: contact@smarttable.co.nz",
              },
              {
                question: "Can customers customise their orders?",
                answer:
                  "Yes, customers can modify their orders using the menu options and add special instructions, which are sent directly to both the POS and KDS.",
              },
              {
                question:
                  "How is this beneficial over ordering through QR code?",
                answer:
                  "Ordering via QR codes requires scanning, accessing a website, and manually entering payment details. With Smart Table, customers enjoy a hassle-free ordering experience with a fully integrated and streamlined system.",
              },
            ].map((item, index) => (
              <details className="faq-item" key={index}>
                <summary>
                  <span className="faq-question">{item.question}</span>
                  <span className="arrow">&#9662;</span>
                </summary>
                <div className="faq-answer">{item.answer}</div>
              </details>
            ))}
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
