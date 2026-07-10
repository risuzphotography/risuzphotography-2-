import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">


            <div>
              <h2>Risuz Photography</h2>
              <p>Capture your moments, 
                preserve your memories.Book our professional photography services for your upcoming events and make them lifetime.</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links-block">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/client-login">Client Login</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <a
                href="https://wa.me/94761145268"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: +94 76 114 5268
              </a>
            </li>
            <li>
              <a href="tel:+94761145268">Phone: 076 114 5268</a>
            </li>
            <li>
              <a href="mailto:risuzphotography@gmail.com">
                Email: risuzphotography@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://web.facebook.com/Risuzphotography/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook: Risuz Photography
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} Risuz Photography. All rights reserved.</p>
          <p>Designed & Developed by Sanithu Udaneth.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;