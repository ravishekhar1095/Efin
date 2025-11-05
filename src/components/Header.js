import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((prev) => !prev);
  const handleClose = () => setMenuOpen(false);
  const getNavClass = ({ isActive }) => (isActive ? 'active' : undefined);

  return (
    <header className="top-bar">
      <Link to="/" className="logo" onClick={handleClose}>
        Efin
      </Link>

      <button
        className="menu-toggle"
        type="button"
        onClick={handleToggle}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="primary-navigation"
        className={`nav-links${menuOpen ? ' open' : ''}`}
        aria-label="Main navigation"
      >
        <NavLink to="/solutions" className={getNavClass} onClick={handleClose}>
          Solutions
        </NavLink>
        <NavLink to="/why-efin" className={getNavClass} onClick={handleClose}>
          Why Efin
        </NavLink>
        <NavLink to="/how-it-works" className={getNavClass} onClick={handleClose}>
          How It Works
        </NavLink>
        <NavLink to="/support" className={getNavClass} onClick={handleClose}>
          Support
        </NavLink>
      </nav>

      <div className="nav-actions">
        <Link className="secondary-link" to="/support/login" onClick={handleClose}>
          Customer Login
        </Link>
        <Link className="primary-btn" to="/support/apply" onClick={handleClose}>
          Apply Now
        </Link>
      </div>
    </header>
  );
}

export default Header;
