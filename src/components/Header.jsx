import "../styles/Header.css";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      // Use native smooth scroll which respects CSS scroll-margin-top
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMenu();
  };

  return (
    <header className="header py-3 sticky-top z-3">
      <nav className="container d-flex justify-content-between align-items-center">
        <h1 className="fs-4 m-0">Likhila Vydana</h1>
        
        {/* Mobile menu button */}
        <button 
          className="mobile-menu-btn d-md-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Navigation menu */}
        <ul className={`nav gap-3 ${isMenuOpen ? 'nav-mobile-open' : ''}`}>
          <li className="nav-item">
            <a className="nav-link fw-medium" href="#" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium" href="#" onClick={(e) => handleNavClick(e, 'overview')}>Overview</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium" href="#" onClick={(e) => handleNavClick(e, 'resume')}>Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium" href="#" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium" href="#" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium" href="#" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium" href="#" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;