import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav-links">
      <Link to="/">Home</Link>
      <div className="dropdown">
        <Link to="/Features" className="dropdown-toggle">
          Features
        </Link>
        <div className="dropdown-content">
          <Link to="/Features#pos">Point of Sales (POS)</Link>
          <Link to="/Features#kds">Kitchen Display System (KDS)</Link>
          <Link to="/Features#kiosk">Table Order Kiosk</Link>
          <Link to="/Features#multiple-pos-kds">Multiple POS & KDS</Link>
          <Link to="/Features#online-ordering">Online Ordering</Link>
          <Link to="/Features#reservation">QR Ordering</Link>
          <Link to="/Features#sale-analytics">Sales Analytics</Link>
          <Link to="/Features#inventory-management">Inventory Management</Link>
          <Link to="/Features#loyalty-program">Loyalty Program</Link>
          <Link to="/Features#delivery-app-integration">
            Delivery App Integration
          </Link>
        </div>
      </div>
      <Link to="/pricing">Pricing</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Header;
