import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpeg';
import './Navbar.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Clients', path: '/clients' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-container">
            <img src={logo} alt="EEE – Environmental Engineering Experts" className="navbar__logo-img" />
          </div>
        </Link>

        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar__link ${pathname === link.path ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="btn btn-primary navbar__cta">
          Request Consultation
        </Link>

        <button className="navbar__burger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__mobile-link ${pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 12 }}>
            Request Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
