import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="badge">Risuz Photography</span>

          <h1>
            Capture your story with{" "}
            <span className="hero-highlight">timeless photography</span>
          </h1>

          <p>
            Wedding, portrait, event, and lifestyle photography crafted to
            preserve emotion, detail, and unforgettable moments with a clean
            and modern visual style.
          </p>

          <div className="hero-actions">
            <Link to="/portfolio" className="btn btn-primary">
              View Portfolio
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <h3>Creative</h3>
              <span>Natural storytelling and polished composition</span>
            </div>
            <div className="hero-stat">
              <h3>Personal</h3>
              <span>Sessions designed around your moments and style</span>
            </div>
            <div className="hero-stat">
              <h3>Private</h3>
              <span>Client gallery access with Google Photos delivery</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-card">
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80"
              alt="Camera and photography setup"
            />
          </div>

          <div className="hero-floating-card top-card">
            <span className="floating-label">Featured Style</span>
            <h4>Weddings • Portraits • Events</h4>
          </div>

          <div className="hero-floating-card bottom-card">
            <span className="floating-label">Client Access</span>
            <h4>Private gallery login & album delivery</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;