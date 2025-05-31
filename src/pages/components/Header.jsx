
const Header = () => {
    return (
        <div className="nav-links">
            <a href="/SmartTableNZ/">Home</a>
            <div className="dropdown">
                <a href="/SmartTableNZ/products" className="dropdown-toggle">
                    Product & Services
                </a>
                <div className="dropdown-content">
                    <a href="/SmartTableNZ/products#kiosk">Table Kiosk</a>
                    <a href="/SmartTableNZ/products#pos">Point of Sales (POS)</a>
                    <a href="/SmartTableNZ/products#kds">Kitchen Display System (KDS)</a>
                    <a href="/SmartTableNZ/products#qr">QR Code Ordering</a>
                    <a href="/SmartTableNZ/products#online-ordering">Online Ordering</a>
                    <a href="/SmartTableNZ/products#reservation">Online Reservation</a>
                </div>
            </div>
            <a href="/SmartTableNZ/pricing">Pricing</a>
            <a href="/SmartTableNZ/contact">Contact</a>
        </div>
    )
}

export default Header;