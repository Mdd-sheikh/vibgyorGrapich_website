import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Palette, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { siteInfo } from '../../Mock';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Mock subscription - will be connected to backend later
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-info">
              <h3>Subscribe to My Newsletter</h3>
              <p>Get design tips, project updates, and exclusive content delivered to your inbox.</p>
            </div>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* About Column */}
            <div className="footer-column">
              <div className="footer-logo">
                <Palette className="footer-logo-icon" />
                <span>{siteInfo.name}</span>
              </div>
              <p className="footer-about">
                {siteInfo.title} specializing in Product Design, Packaging, Branding & Social Media Graphics.
              </p>
              <div className="footer-social">
                <a href={siteInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href={siteInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${siteInfo.email}`} aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-column">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><Link to="/services">Packaging Design</Link></li>
                <li><Link to="/services">Banner Design</Link></li>
                <li><Link to="/services">Social Media Graphics</Link></li>
                <li><Link to="/services">Branding & Logo</Link></li>
                <li><Link to="/services">Print Design</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h4>Contact</h4>
              <ul className="footer-contact">
                <li>
                  <Mail size={16} />
                  <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
                </li>
                <li>
                  <Phone size={16} />
                  <a href={`tel:${siteInfo.phone}`}>{siteInfo.phone}</a>
                </li>
                <li>
                  <MapPin size={16} />
                  <span>{siteInfo.location}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} {siteInfo.name}. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
