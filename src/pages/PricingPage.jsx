// src/components/PricingPage.jsx
import { useState } from "react";
import "./PricingPage.css";
import logo from "../assets/images/DarkLogo.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

const PricingPage = () => {
  const [tabletCount, setTabletCount] = useState(0);
  const [kioskIncluded, setKioskIncluded] = useState(false);
  const [kioskContract, setKioskContract] = useState("3month");
  const [monthlyCost, setMonthlyCost] = useState(0);

  const handleCalculate = () => {
    const baseCost = 150;
    const tabletCost = tabletCount * 50;
    let total = baseCost + tabletCost;

    if (kioskIncluded) {
      const kioskRate = kioskContract === "1year" ? 15 : 20;
      total += kioskRate * tabletCount;
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

      <section className="section">
        <h1 style={{ textAlign: "center" }}>Pricing Options</h1>
        <div className="pricing-2x2">
          <div className="pricing-col">
            <div className="feature">
              <h3>3-Month Contract</h3>
              <p>
                Ideal for short-term flexibility.
                <br />
                <strong>$20/table/week</strong>
              </p>
            </div>
            <div className="feature">
              <h3>3-Month Percentage Option</h3>
              <p>
                Pay as you grow.
                <br />
                <strong>2.0% of total weekly sales</strong>
                <br />
                (whichever is higher)
              </p>
            </div>
          </div>
          <div className="pricing-col">
            <div className="feature">
              <h3>1-Year Contract</h3>
              <p>
                Best value for established venues.
                <br />
                <strong>$15/table/week</strong>
              </p>
            </div>
            <div className="feature">
              <h3>1-Year Percentage Option</h3>
              <p>
                Long-term savings with flexibility.
                <br />
                <strong>1.5% of total weekly sales</strong>
                <br />
                (whichever is higher)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 style={{ textAlign: "center" }}>Estimate Your Monthly Cost</h2>
        <div className="calculator">
          <div className="inputs">
            <label htmlFor="tabletCount">Number of POS & KDS Tablets</label>
            <select
              id="tabletCount"
              value={tabletCount}
              onChange={(e) => setTabletCount(Number(e.target.value))}
            >
              {[...Array(21).keys()].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>

            <label>
              <input
                type="checkbox"
                checked={kioskIncluded}
                onChange={(e) => setKioskIncluded(e.target.checked)}
              />
              Include Table Order Kiosk
            </label>

            {kioskIncluded && (
              <select
                value={kioskContract}
                onChange={(e) => setKioskContract(e.target.value)}
              >
                <option value="3month">3-Month Contract ($20/tablet)</option>
                <option value="1year">1-Year Contract ($15/tablet)</option>
              </select>
            )}

            <button onClick={handleCalculate}>Get Your Quote</button>
          </div>

          <div className="result-box">
            <div className="result-title">Your Monthly Cost</div>
            <div className="result-value">
              $
              {monthlyCost.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
            <div className="result-note">
              * This estimate is based on a 1-year contract.
              <br />* Includes POS & KDS software, hardware, and optional Kiosk
              system.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
