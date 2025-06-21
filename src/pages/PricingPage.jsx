import React, { useState } from "react";
import logo from "../assets/images/DarkLogo.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

const PricingPage = () => {
  const [tabletCount, setTabletCount] = useState(0);
  const [kioskIncluded, setKioskIncluded] = useState("No");
  const [kioskContract, setKioskContract] = useState("3month");
  const [kioskTableCount, setKioskTableCount] = useState(0);
  const [monthlyCost, setMonthlyCost] = useState(0);

  const pricingOptions = [
    {
      title: "Software Only Subscription",
      price: "$150/month + $50 per tablet",
      description:
        "Includes all features. POS & KDS usage included. No hidden costs.",
      color: "#00bcd4",
    },
    {
      title: "Table Order Kiosk (3-Month Contract)",
      price: "$18/week per table",
      description: "Flexible short-term option to boost table-side efficiency.",
      color: "#ab47bc",
    },
    {
      title: "Table Order Kiosk (1-Year Contract)",
      price: "$12/week per table",
      description: "Best value for committed venues using self-service kiosks.",
      color: "#26a69a",
    },
  ];

  const handleCalculate = () => {
    const baseCost = 150;
    const tabletCost = tabletCount * 50;
    let total = baseCost + tabletCost;

    if (kioskIncluded === "Yes") {
      const rate = kioskContract === "1year" ? 12 : 18;
      const kioskCost = rate * kioskTableCount * 4; // Weekly to Monthly
      total += kioskCost;
    }

    setMonthlyCost(total);
  };

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

      <section className="features-section">
        <div className="content-wrapper">
          <h2 className="section-title">Pricing Plans</h2>
          <hr className="section-divider" />

          <div className="feature-card-grid">
            {pricingOptions.map((option, i) => (
              <div
                key={i}
                className="feature-card"
                style={{
                  border: `2px solid ${option.color}`,
                  borderRadius: "10px",
                  padding: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                }}
              >
                <div className="feature-card-text">
                  <h3 style={{ color: option.color, marginBottom: "10px" }}>
                    {option.title}
                  </h3>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "18px",
                      marginBottom: "8px",
                    }}
                  >
                    {option.price}
                  </p>
                  <p style={{ color: "#ccc" }}>{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content-wrapper">
          <h2 className="section-title">Estimate Your Monthly Cost</h2>
          <hr className="section-divider" />

          <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <label>Number of POS & KDS Tablets</label>
            <select
              value={tabletCount}
              onChange={(e) => setTabletCount(Number(e.target.value))}
              style={inputStyle}
            >
              {[...Array(21).keys()].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>

            <label>Include Table Order Kiosk?</label>
            <select
              value={kioskIncluded}
              onChange={(e) => setKioskIncluded(e.target.value)}
              style={inputStyle}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>

            {kioskIncluded === "Yes" && (
              <>
                <label>Contract Period</label>
                <select
                  value={kioskContract}
                  onChange={(e) => setKioskContract(e.target.value)}
                  style={inputStyle}
                >
                  <option value="3month">
                    3-Month Contract ($18/table/week)
                  </option>
                  <option value="1year">
                    1-Year Contract ($12/table/week)
                  </option>
                </select>

                <label>Number of Tables (Kiosk)</label>
                <select
                  value={kioskTableCount}
                  onChange={(e) => setKioskTableCount(Number(e.target.value))}
                  style={inputStyle}
                >
                  {[...Array(51).keys()].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </>
            )}

            <button onClick={handleCalculate} style={buttonStyle}>
              Calculate Monthly Cost
            </button>

            <div style={resultBoxStyle}>
              <h3 style={{ marginBottom: "10px" }}>Your Monthly Cost</h3>
              <p style={{ fontSize: "32px", fontWeight: "bold" }}>
                ${monthlyCost.toFixed(2)}
              </p>
              <p style={{ fontSize: "14px", color: "#ccc" }}>
                * Base includes software subscription, POS & KDS usage. Kiosk
                charges apply only if selected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#1b3662",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "10px",
};

const resultBoxStyle = {
  backgroundColor: "#1b3662",
  color: "white",
  padding: "20px",
  marginTop: "20px",
  borderRadius: "10px",
  textAlign: "center",
};

export default PricingPage;
