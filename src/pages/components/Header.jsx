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
          <Link to="/Features#operations">Restaurant Operations</Link>
          <Link to="/Features#front">Front-of-House Features</Link>
          <Link to="/Features#addons">Optional Add-Ons</Link>
        </div>
      </div>
      <Link to="/pricing">Pricing</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Header;
