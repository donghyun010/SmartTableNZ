import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Home</h4>
            <Link to="/#ordering">Smart Ordering in 3 Steps</Link>
            <a href="/#ordering">Smart Ordering in 3 Steps</a>
            <a href="/#why">Why Smart Table</a>
          </div>
          <div className="footer-column">
            <h4>Products & Services</h4>
             <Link to="/#how-it-works">How It Works</Link>
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
      );
};

export default Footer;
