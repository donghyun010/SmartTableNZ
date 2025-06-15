import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Home</h4>
          <HashLink smooth to="/#why">
            Why Choose Smart Table?
          </HashLink>
          <HashLink smooth to="/#features">
            Features
          </HashLink>
          <HashLink smooth to="/#optional-addon">
            Optional Add-On: Table Order Kiosk
          </HashLink>
          <HashLink smooth to="/#ready">
            Ready to Get Started?
          </HashLink>
        </div>

        <div className="footer-column">
          <h4>Products & Services</h4>
          <HashLink smooth to="/#table-order-kiosk">
            Table Order Kiosk
          </HashLink>
          <HashLink smooth to="/#pos">
            Point of Sales (POS)
          </HashLink>
          <HashLink smooth to="/#kds">
            Kitchen Display System (KDS)
          </HashLink>
          <HashLink smooth to="/#multiple-pos-kds">
            Multiple POS & KDS
          </HashLink>
          <HashLink smooth to="/#online-ordering">
            Online Ordering & Reservation
          </HashLink>
          <HashLink smooth to="/#qr-ordering">
            QR Ordering
          </HashLink>
          <HashLink smooth to="/#sales-analytics">
            Sales Analytics
          </HashLink>
          <HashLink smooth to="/#inventory-management">
            Inventory Management
          </HashLink>
          <HashLink smooth to="/#loyalty-program">
            Loyalty Program
          </HashLink>
          <HashLink smooth to="/#delivery-integration">
            Delivery App Integration
          </HashLink>
        </div>

        <div className="footer-column">
          <h4>Pricing</h4>
          <Link to="/pricing">Pricing Options</Link>
          <Link to="/quote">Get Your Quote</Link>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <Link to="/contact">Get In Touch</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
