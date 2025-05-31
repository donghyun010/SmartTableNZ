import logo from "../assets/images/DarkLogo.png";
import Header from "./components/Header";

const ProductsPage = () => {
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
        <h1 style={{ textAlign: "center" }}>Our Product & Services</h1>
        <div className="features">
          <div className="feature" id="kiosk">
            <h3>Table Kiosk</h3>
            <p>
              Interactive tablet for customers to browse, order, and pay
              directly from the table.
            </p>
          </div>
          <div className="feature" id="pos">
            <h3>Point of Sales (POS)</h3>
            <p>
              Integrated Point of Sale to manage all orders and payments in
              real-time.
            </p>
          </div>
          <div className="feature" id="kds">
            <h3>Kitchen Display System (KDS)</h3>
            <p>
              Orders instantly appear on the kitchen screen to reduce errors and
              delays.
            </p>
          </div>
          <div className="feature" id="qr">
            <h3>QR Code Ordering</h3>
            <p>Scan, order, and pay without needing staff interaction.</p>
          </div>
          <div className="feature" id="online-ordering">
            <h3>Online Ordering</h3>
            <p>Let customers order remotely via web or mobile.</p>
          </div>
          <div className="feature" id="reservation">
            <h3>Online Reservation</h3>
            <p>Customers can book tables through your website or app.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Smart Table. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductsPage;
