import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav-links">
      <Link to="/">Home</Link>
      <div className="dropdown">
        <Link to="/products" className="dropdown-toggle">
          Product & Services
        </Link>
        <div className="dropdown-content">
          <Link to="/products#kiosk">Table Kiosk</Link>
          <Link to="/products#pos">Point of Sales (POS)</Link>
          <Link to="/products#kds">Kitchen Display System (KDS)</Link>
          <Link to="/products#qr">QR Code Ordering</Link>
          <Link to="/products#online-ordering">Online Ordering</Link>
          <Link to="/products#reservation">Online Reservation</Link>
        </div>
      </div>
      <Link to="/pricing">Pricing</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Header;
