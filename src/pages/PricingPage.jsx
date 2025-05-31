// src/components/PricingPage.jsx
import { useState } from "react";
import "./PricingPage.css";
import logo from "../assets/images/DarkLogo.png";
import Header from "./components/Header";

const PricingPage = () => {
  const [tables, setTables] = useState("");
  const [contractRate, setContractRate] = useState("");
  const [weeklyCost, setWeeklyCost] = useState(0);

  const handleCalculate = () => {
    if (!contractRate) {
      alert("Please select a contract type.");
      return;
    }
    const numTables = parseFloat(tables) || 0;
    const result = numTables * parseFloat(contractRate);
    setWeeklyCost(result);
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

      <div className="top-curve">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#f4f4f4"
            d="M0,160L80,138.7C160,117,320,75,480,90.7C640,107,800,181,960,181.3C1120,181,1280,107,1360,69.3L1440,32V0H0Z"
          ></path>
        </svg>
      </div>

      <section className="section">
        <h1 style={{ textAlign: "center" }}>Pricing Options</h1>
        <div className="pricing-2x2">
          <div className="pricing-col">
            <div className="feature">
              <h3>3-Month Contract</h3>
              <p>
                Ideal for short-term flexibility.<br />
                <strong>$20/table/week</strong>
              </p>
            </div>
            <div className="feature">
              <h3>3-Month Percentage Option</h3>
              <p>
                Pay as you grow.<br />
                <strong>2.0% of total weekly sales</strong><br />
                (whichever is higher)
              </p>
            </div>
          </div>

          <div className="pricing-col">
            <div className="feature">
              <h3>1-Year Contract</h3>
              <p>
                Best value for established venues.<br />
                <strong>$15/table/week</strong>
              </p>
            </div>
            <div className="feature">
              <h3>1-Year Percentage Option</h3>
              <p>
                Long-term savings with flexibility.<br />
                <strong>1.5% of total weekly sales</strong><br />
                (whichever is higher)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 style={{ textAlign: "center" }}>Estimate Your Weekly Cost</h2>
        <div className="calculator">
          <div className="inputs">
            <select
              value={contractRate}
              onChange={(e) => setContractRate(e.target.value)}
            >
              <option value="">Select Contract Type</option>
              <option value="15">Option 1 (1 Year Contract)</option>
              <option value="20">Option 2 (Monthly Contract)</option>
            </select>
            <input
              type="number"
              placeholder="Number of Tables"
              value={tables}
              onChange={(e) => setTables(e.target.value)}
              min="0"
            />
            <button onClick={handleCalculate}>Get Your Quote</button>
          </div>

          <div className="result-box">
            <div className="result-title">Your Weekly Cost</div>
            <div className="result-value">
              ${weeklyCost.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
            <div className="result-note">
              * Your Weekly Cost does not include installation fee. <br />
              * It includes both hardware and software subscription, plus
              insurance for all hardware.
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Smart Table. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PricingPage;
