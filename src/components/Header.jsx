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
            <a className="nav-link fw-medium" href="#about" onClick={closeMenu}>About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium" href="#overview" onClick={closeMenu}>Overview</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium" href="#resume" onClick={closeMenu}>Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium" href="#skills" onClick={closeMenu}>Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium" href="#projects" onClick={closeMenu}>Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium" href="#experience" onClick={closeMenu}>Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium" href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;