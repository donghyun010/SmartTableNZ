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
                img: require("../assets/images/Image 5.jpg"),
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
                <div className="tablet-frame-wrapper">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="feature-card-image"
                  />
                  <img
                    src={require("../assets/images/tablet-frame.jpg")}
                    alt="Tablet Frame"
                    className="tablet-frame-overlay"
                  />
                </div>
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

      <Footer />
    </div>
  );
};

export default ProductsPage;
