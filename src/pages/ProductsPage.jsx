import logo from "../assets/images/DarkLogo.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";

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
        <div className="content-wrapper">
          <h2 className="section-title">Optional Add-On: Table Order Kiosk</h2>
          <hr className="section-divider" />
          <p>
            Our Table Order Kiosk system transforms dining with securely mounted
            tablets at each table. This premium solution streamlines operations,
            speeds up service, and enhances the customer experience with
            seamless interactive ordering.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
