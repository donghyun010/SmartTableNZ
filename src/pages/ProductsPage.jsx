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

          <div className="feature-card-grid">
            {[
              {
                title: "POINT OF SALES (POS)",
                desc: "Fully customise your table layout and menu anytime – quickly, easily and exactly how you want it.",
                img: require("../assets/images/Image 1.jpg"),
              },
              {
                title: "KITCHEN DISPLAY SYSTEM (KDS)",
                desc: "Seamlessly sync with the POS to simplify order management, with the flexibility to split KDS screens by section or station—customising each view to suit your workflow.",
                img: require("../assets/images/Image 2.jpg"),
              },
              {
                title: "MULTIPLE POS & KDS",
                desc: "Use unlimited POS & KDS devices across your venue – all included, always in sync.",
                img: require("../assets/images/Image 3.jpg"),
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
                img: require("../assets/images/Image 2.jpg"),
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

      <section className="section">
        <h2 style={{ color: "white" }}>Smart Ordering in 3 Steps</h2>
        <ImageCarousel />
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
