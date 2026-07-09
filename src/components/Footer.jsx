import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-mark">R</span>
            <div>
              <h3>Risuz Photography</h3>
              <p>Capturing moments with creativity, emotion, and timeless photography.</p>
            </div>
          </div>
        </div>

        <div className="footer-links-block">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/client-login">Client Login</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>WhatsApp: Add your number</li>
            <li>Phone: Add your phone</li>
            <li>Email: your@email.com</li>
            <li>Instagram: @risuzphotography</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} Risuz Photography. All rights reserved.</p>
          <p>Designed for timeless stories and private client galleries.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;