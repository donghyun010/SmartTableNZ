import React, { useState } from "react";
import logo from "../assets/images/DarkLogo.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Image10 from "../assets/images/Image 1.jpg";
import Image11 from "../assets/images/Image 2.jpg";

import "./FeaturesPage.css";

const FeaturesPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("operations");

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

      <section className="segmented-tab-wrapper" style={{ marginTop: "80px" }}>
        <div className="segmented-tab-background">
          {[
            { key: "operations", label: "Restaurant Operations" },
            { key: "front", label: "Front-of-House Features" },
            { key: "addons", label: "Optional Add-Ons" },
          ].map((tab) => (
            <button
              key={tab.key}
              className={`segmented-tab-button ${
                activeTab === tab.key ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="segmented-tab-features">
          {{
            operations: [
              {
                title: "Point of Sales (POS)",
                content:
                  "A powerful point-of-sale system designed for speed, ease, and flexibility.",
                image: Image10,
                subFeatures: [
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
                ],
              },
              {
                title: "Kitchen Display System (KDS)",
                content:
                  "Streamline Back-of-House operations with digital screens - No more paper dockets",
                image: Image11,
                subFeatures: [
                  {
                    title: "Order Management",
                    content:
                      "Customise what's displayed and track prep time for every order.",
                  },
                  {
                    title: "Multiple KDS",
                    content:
                      "Customise menu view for each KDS by section or station.",
                  },
                  {
                    title: "Sync With POS",
                    content:
                      "Real-time sync with POS ensures accuracy and eliminates confusion.",
                  },
                ],
              },
              {
                title: "Multiple Syncing POS/KDS",
                content:
                  "Use unlimited POS and KDS devices across your venue - Always in syce",
                image: Image10,
                subFeatures: [
                  {
                    title: "Multi-Terminal POS & KDS Sync",
                    content:
                      "Run multiple POS and KDS setups across your venue with full sync",
                  },
                  {
                    title: "Station-Specific KDS Assignment",
                    content:
                      "Assign KDS screens to individual kitchen stations for better workflow.",
                  },
                  {
                    title: "Tailored Sync for Your Workflow",
                    content:
                      "Control how POS and KDS sync, based on your restaurant’s flow.",
                  },
                ],
              },
              {
                title: "Sales and Analytics",
                content:
                  "Gain Actionable Insights into your restaurant's performance",
                image: Image10,
                subFeatures: [
                  {
                    title: "Total Sales & Number of orders",
                  },
                  {
                    title: "Average daily sales and order value",
                  },
                  {
                    title: "Best Selling categories and menu items",
                  },
                  {
                    title:
                      "Sales breakdown: Dine-in, Pickup, Delievery, card and cash",
                  },
                  {
                    title:
                      "Total discounts applied, loyalty rewards redeemed, refunds and voided orders",
                  },
                  {
                    title: "Sales and order trends by time of day",
                  },
                ],
              },
              {
                title: "Inventory Management",
                content:
                  "Keep track of stock, ingredients, and suppliers from one dashboard.",
                image: Image10,
                subFeatures: [
                  {
                    title: "Stock Management",
                    content:
                      "Customise what's displayed and track prep time for every order.",
                  },
                  {
                    title: "Auto Alarm System",
                    content:
                      "Customise menu view for each KDS by section or station.",
                  },
                  {
                    title: "Sync With POS",
                    content:
                      "Real-time sync with POS ensures accuracy and eliminates confusion.",
                  },
                ],
              },
            ],
            front: [
              {
                title: "Online Ordering",
                content: "Oneline Ordering Integrated with POS & KDS",
                image: Image10,
                subFeatures: [
                  {
                    title:
                      "Customers place order via your webiste or delivery app",
                  },
                  {
                    title:
                      "Orders are instantly sent to POS and KDS tagged for Pickup & Delivery",
                  },
                  {
                    title:
                      "Staff manage orders and payment directly from POS system or Delivery App",
                  },
                ],
              },
              {
                title: "Online Reservations",
                content:
                  "Enable guests to book tables from your website or partner platforms.",
                image: "../assets/images/feature-7.jpg",
                subFeatures: [
                  {
                    title:
                      "Customers book online via the Smart Table site, linked directly to your website",
                  },
                  {
                    title:
                      "Reservations instatnly pop-up on your Reservation Dashboard",
                  },
                  {
                    title:
                      "Easily manage the day's seating plan through the POS system",
                  },
                ],
              },
              {
                title: "QR Code Ordering",
                content:
                  "Guests can scan, view the menu, and order directly from their table.",
                image: "../assets/images/feature-8.jpg",
                subFeatures: [
                  {
                    title:
                      "Customers place their order from a touchscreen kiosk or QR Code at their table",
                  },
                  {
                    title: "Orders are instantly sent to POS and KDS",
                  },
                  {
                    title:
                      "Restaurant management and payments are handled via the POS system",
                  },
                ],
              },
              {
                title: "Loyalty Program",
                content:
                  "Custom loyalty and voucher tools for customers, staff and companies.",
                image: "../assets/images/feature-9.jpg",
                subFeatures: [
                  {
                    title: "Loyalty for Regulars or Companies",
                    content:
                      "Add frequent customers or businesses into the POS system with a loyalty balance they can spend as cash.",
                  },
                  {
                    title: "Voucher Management",
                    content:
                      "Custom input of vouchers function as store credit.",
                  },
                  {
                    title: "Staff Discount",
                    content:
                      "Assign preconfigured credit or discount allowances to staff members.",
                  },
                ],
              },
              {
                title: "Delivery Service Integration",
                content:
                  "Sync with platforms like Uber Eats or DoorDash with minimal setup.",
                image: "../assets/images/feature-10.jpg",
                subFeatures: [
                  {
                    title:
                      "No more additional tablets for different Delivery apps.",
                  },
                  {
                    title: "No manual setup - we connect it all for you.",
                  },
                  {
                    title:
                      "All delivery orders automatically sync with your POS & KDS",
                  },
                ],
              },
            ],
            addons: [
              {
                title: "Table Order Kiosk",
                content:
                  "Mountable touchscreen kiosks that let customers order directly at their table.",
                image: "../assets/images/feature-11.jpg",
                subFeatures: [
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
                ],
              },
            ],
          }[activeTab].map((feature, index) => (
            <div
              key={index}
              className={`feature-split-row ${
                index % 2 === 0 ? "normal" : "reverse"
              }`}
            >
              <div className="feature-split-image">
                <img src={feature.image} alt={feature.title} />
              </div>

              <div className="feature-split-text">
                <h3>{feature.title}</h3>
                <p>{feature.content}</p>

                {feature.subFeatures &&
                  feature.subFeatures.map((sub, subIndex) => {
                    const isOpen = openIndex === `${index}-${subIndex}`;
                    return (
                      <div
                        key={subIndex}
                        className={`accordion-item ${isOpen ? "open" : ""}`}
                        onClick={() =>
                          setOpenIndex(isOpen ? null : `${index}-${subIndex}`)
                        }
                      >
                        <div className="accordion-header">
                          <span className="icon-left">
                            {feature.title === "Online Ordering" ||
                            feature.title === "Online Reservations" ||
                            feature.title === "QR Code Ordering"
                              ? `${subIndex + 1}.`
                              : "✔"}
                          </span>
                          <span className="accordion-title">{sub.title}</span>
                          {sub.content && (
                            <span
                              className={`icon-right ${
                                isOpen ? "rotated" : ""
                              }`}
                            >
                              ›
                            </span>
                          )}
                        </div>
                        {isOpen && (
                          <div className="accordion-content">{sub.content}</div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
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
