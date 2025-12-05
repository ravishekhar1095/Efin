import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import landingPages, { NAV_STRUCTURE } from '../content/landingPages';
import './Header.css';

const NAV_LINKS = NAV_STRUCTURE.map((section) => ({
  label: section.label,
  items: section.items
    .map((key) => {
      const page = landingPages[key];
      if (!page) {
        return null;
      }
      return {
        label: page.title,
        description: page.excerpt,
        to: `/${key}`,
      };
    })
    .filter(Boolean),
}));

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle('has-shadow', window.scrollY > 10);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (menuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const handleClose = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleFocusOut = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.relatedTarget)) {
      setActiveDropdown(null);
    }
  };

  const logoSrc = `${process.env.PUBLIC_URL || ''}/Png-01.png`;

  return (
    <header className="fibe-header" ref={headerRef}>
      <div className="header-shell">
        <Link to="/" className="brand-mark" onClick={handleClose}>
          <img src={logoSrc} alt="E-Fin" className="brand-logo" />
        </Link>

        <button
          className={`nav-toggle${menuOpen ? ' is-active' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-overlay${menuOpen ? ' show' : ''}`} onClick={handleClose} />

        <nav className={`primary-nav${menuOpen ? ' is-visible' : ''}`} aria-label="Primary">
          <ul>
            {NAV_LINKS.map((section) => (
              <li
                key={section.label}
                onBlur={handleFocusOut}
                className={activeDropdown === section.label ? 'expanded' : undefined}
              >
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => toggleDropdown(section.label)}
                >
                  {section.label}
                  <span className="chevron" />
                </button>
                <div className={`mega-menu${activeDropdown === section.label ? ' show' : ''}`}>
                  {section.items.map((item) => (
                    <Link key={item.label} to={item.to} className="mega-card" onClick={handleClose}>
                      <div className="card-text">
                        <h4>{item.label}</h4>
                        <p>{item.description}</p>
                      </div>
                      <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div className="drawer-actions">
            <Link className="ghost-btn" to="/login" onClick={handleClose}>
              Login
            </Link>
            <Link className="primary-btn" to="/support/apply" onClick={handleClose}>
              Apply Now
            </Link>
          </div>
        </nav>

        <div className="nav-actions">
          <Link className="ghost-btn" to="/login" onClick={handleClose}>
            Login
          </Link>
          <Link className="primary-btn" to="/support/apply" onClick={handleClose}>
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
