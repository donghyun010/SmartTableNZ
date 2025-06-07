import React from "react";
import logo from "../assets/images/DarkLogo.png";
import Header from "./components/Header";

const HomePage = () => {
  return (
    <>
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

      <div className="top-curve">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#f4f4f4"
            d="M0,160L80,138.7C160,117,320,75,480,90.7C640,107,800,181,960,181.3C1120,181,1280,107,1360,69.3L1440,32V0H0Z"
          ></path>
        </svg>
      </div>

      <section className="hero">
        <h1>ELEVATE DINING SIMPLIFY OPERATIONS</h1>
        <p>
          Enhance your customers' experience while reducing costs and increasing
          efficiency with Smart Table
        </p>
      </section>

      <section className="section why-smart-table">
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Why Choose Smart Table?
        </h2>
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
      </section>

      <section className="section features-section white-bg">
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Features</h2>
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
              title: "ONLINE ORDERING",
              desc: "Online ordering integrated with POS & KDS.",
            },
            {
              title: "ONLINE RESERVATION",
              desc: "Seamlessly integrated with your POS.",
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
      </section>

      <section className="section highlighted-feature white-bg">
        <div className="feature standout-feature">
          <h2>Optional Add-On: Table Order Kiosk</h2>
          <p>
            Our Table Order Kiosk system transforms dining with securely mounted
            tablets at each table. This premium solution streamlines operations,
            speeds up service, and enhances the customer experience with
            seamless interactive ordering.
          </p>
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <h2>Ready to Get Started?</h2>
        <p>
          Book a free demo with us today and see how Smart Table can transform
          your operations.
        </p>
        <a
          href="/contact"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#222",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none",
            marginTop: "20px",
          }}
        >
          Request a Demo
        </a>
      </section>

      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Home</h4>
            <a href="/#ordering">Smart Ordering in 3 Steps</a>
            <a href="/#why">Why Smart Table</a>
          </div>
          <div className="footer-column">
            <h4>Products & Services</h4>
            <a href="/#how-it-works">How It Works</a>
            <a href="/#features">What We Offer</a>
            <a href="/faq">FAQ</a>
          </div>
          <div className="footer-column">
            <h4>Pricing</h4>
            <a href="/pricing">Pricing Plans</a>
            <a href="/quote">Get Your Quote</a>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <a href="/contact">Get In Touch</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
