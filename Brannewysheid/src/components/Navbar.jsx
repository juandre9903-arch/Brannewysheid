// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";

export default function Navbar({ cartCount, onOpenCart }) {
  const navClass = ({ isActive }) =>
    "nav-link" + (isActive ? " nav-link-active" : "");

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="nav-logo">
          <div className="nav-logo-badge">B</div>
          <span>BRANNEWYSHEID</span>
        </div>

        <nav className="nav-links">
          <NavLink to="/" className={navClass} end>
            Home
          </NavLink>
          <NavLink to="/shop" className={navClass}>
            Shop
          </NavLink>
          <NavLink to="/custom" className={navClass}>
            Custom
          </NavLink>
          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </nav>

        <button className="nav-cart-btn" onClick={onOpenCart}>
          Cart
          {cartCount > 0 && (
            <span className="nav-cart-count">{cartCount}</span>
          )}
        </button>
      </div>
    </header>
  );
}
