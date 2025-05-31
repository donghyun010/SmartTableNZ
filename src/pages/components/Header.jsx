
const Header = () => {
    return (
        <div className="nav-links">
            <a href="/">Home</a>
            <div className="dropdown">
                <a href="/products" className="dropdown-toggle">
                    Product & Services
                </a>
                <div className="dropdown-content">
                    <a href="/products#kiosk">Table Kiosk</a>
                    <a href="/products#pos">Point of Sales (POS)</a>
                    <a href="/products#kds">Kitchen Display System (KDS)</a>
                    <a href="/products#qr">QR Code Ordering</a>
                    <a href="/products#online-ordering">Online Ordering</a>
                    <a href="/products#reservation">Online Reservation</a>
                </div>
            </div>
            <a href="/pricing">Pricing</a>
            <a href="/contact">Contact</a>
        </div>
    )
}

export default Header;