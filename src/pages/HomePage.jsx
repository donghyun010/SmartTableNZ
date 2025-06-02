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
        <h1>HI DINING SIMPLIFY OPERATIONS</h1>
        <p>
          Enhance your customers' experience while reducing costs and increasing
          efficiency with Smart Table
        </p>
      </section>

      <section className="section">
        <div className="features">
          {[
            {
              title: "Smart Tablet Ordering",
              desc: "Customers can view the menu, order food, and request service directly from their table.",
            },
            {
              title: "POS Integration",
              desc: "Connects with your POS system to ensure seamless order processing and payment handling.",
            },
            {
              title: "Kitchen Display System (KDS)",
              desc: "Orders instantly appear on the kitchen screen, reducing order errors and speeding up food preparation.",
            },
            {
              title: "Reservation Management",
              desc: "Manage walk-ins and bookings effortlessly through Smart Table's intuitive interface.",
            },
            {
              title: "Sales Analytics",
              desc: "Visual dashboards and reports help you track popular items, busy times, and customer preferences.",
            },
            {
              title: "Custom Branding",
              desc: "Your brand, your way—customize tablet UI to reflect your restaurant's style and menu.",
            },
          ].map((feature, i) => (
            <div className="feature" key={i}>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <h2>Why Choose Smart Table?</h2>
        <p>
          We're more than just tablets—we're your partner in delivering faster
          service, better data, and happier diners.
        </p>
        <p>
          Smart Table empowers your restaurant to cut down wait times, reduce
          labor costs, and elevate the dining experience.
        </p>
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

      <footer>
        <p>&copy; 2025 Smart Table. All rights reserved.</p>
      </footer>
    </>
  );
};

export default HomePage;
