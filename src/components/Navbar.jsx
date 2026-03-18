import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'L\'Agence', path: '/agence' },
    { name: 'Services', path: '/services' },
    { name: 'Dossiers', path: '/dossiers' },
    { name: 'Tarifs & Déontologie', path: '/tarifs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar glass-card">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <Search className="logo-icon" size={26} />
          <span className="logo-text text-gradient">AD4</span>
        </NavLink>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
                onClick={closeMenu}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
