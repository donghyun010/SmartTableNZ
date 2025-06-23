import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav-links">
      <Link to="/">Home</Link>
      <div className="dropdown">
        <Link to="/products" className="dropdown-toggle">
          Product & Services
        </Link>
        <div className="dropdown-content">
          <Link to="/products#kiosk">Table Order Kiosk</Link>
          <Link to="/products#pos">Point of Sales (POS)</Link>
          <Link to="/products#kds">Kitchen Display System (KDS)</Link>
          <Link to="/products#multiple-pos-kds">Multiple POS & KDS</Link>
          <Link to="/products#online-ordering">Online Ordering</Link>
          <Link to="/products#reservation">QR Ordering</Link>
          <Link to="/products#sale-analytics">Sales Analytics</Link>
          <Link to="/products#inventory-management">Inventory Management</Link>
          <Link to="/products#loyalty-program">Loyalty Program</Link>
          <Link to="/products#delivery-app-integration">
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
