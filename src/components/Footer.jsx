import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import logo from '../assets/logo.jpeg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-container">
                <img src={logo} alt="EEE – Environmental Engineering Experts" className="footer__logo-img" />
              </div>
            </Link>
            <p className="footer__tagline">
              Practical engineering solutions for water &amp; wastewater challenges — built on decades of real-world field experience.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="LinkedIn"><ExternalLink size={17} /></a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__list">
              <li><Link to="/services#design-review">Design Review</Link></li>
              <li><Link to="/services#commissioning">Commissioning & Start-up</Link></li>
              <li><Link to="/services#troubleshooting">Troubleshooting & Optimization</Link></li>
              <li><Link to="/services#sludge">Sludge Dewatering Solutions</Link></li>
              <li><Link to="/services#advisory">Technical Advisory</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__list">
              <li><Link to="/about">About EEE</Link></li>
              <li><Link to="/projects">Projects & Experience</Link></li>
              <li><Link to="/clients">Clients</Link></li>
              <li><Link to="/insights">Insights & Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__contact-list">
              <li><Mail size={14} /><a href="mailto:info@eee-engineering.com">info@eee-engineering.com</a></li>
              <li><Phone size={14} /><a href="tel:+0000000000">+000 000 000 000</a></li>
              <li><MapPin size={14} /><span>Middle East & North Africa Region</span></li>
            </ul>
            <Link to="/contact" className="footer__cta">
              Request Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} EEE – Environmental Engineering Experts. All rights reserved.</p>
          <p className="footer__bottom-right">Wastewater Treatment · Sludge Solutions · Technical Advisory</p>
        </div>
      </div>
    </footer>
  );
}
