import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  const portfolioItems = [
    {
      title: "Weddings",
      description:
        "Timeless wedding storytelling, candid moments, and elegant couple portraits.",
      image:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Portraits",
      description:
        "Clean and expressive portraits designed around personality, mood, and style.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Events",
      description:
        "Professional coverage for birthdays, celebrations, private functions, and special moments.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const services = [
    {
      title: "Wedding Photography",
      description:
        "Beautiful storytelling coverage for weddings, engagements, and couple sessions.",
    },
    {
      title: "Portrait Sessions",
      description:
        "Personal portraits, graduation shoots, lifestyle sessions, and creative photography.",
    },
    {
      title: "Event Coverage",
      description:
        "Reliable event photography for birthdays, gatherings, and celebrations.",
    },
  ];

  const reasons = [
    {
      title: "Creative Direction",
      text: "A modern visual style with natural storytelling, composition, and clean editing.",
    },
    {
      title: "Private Client Access",
      text: "Clients can log in and access their private Google Photos gallery with ease.",
    },
    {
      title: "Professional Delivery",
      text: "Fast communication, organized workflow, and polished final images.",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Featured Portfolio</h2>
            <p className="section-subtitle">
              A look at the stories, portraits, and celebrations captured through
              Risuz Photography.
            </p>
          </div>

          <div className="grid grid-3">
            {portfolioItems.map((item) => (
              <div className="card portfolio-card" key={item.title}>
                <img src={item.image} alt={item.title} className="portfolio-card-image" />
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="home-section-action">
            <Link to="/portfolio" className="btn btn-outline">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Photography Services</h2>
            <p className="section-subtitle">
              Flexible photography services for weddings, portraits, events, and
              personal stories.
            </p>
          </div>

          <div className="grid grid-3">
            {services.map((service) => (
              <div className="card service-card" key={service.title}>
                <div className="card-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="home-section-action">
            <Link to="/services" className="btn btn-primary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Why Choose Risuz Photography</h2>
            <p className="section-subtitle">
              Photography that focuses on emotion, detail, and a smooth client
              experience from booking to gallery delivery.
            </p>
          </div>

          <div className="grid grid-3">
            {reasons.map((reason) => (
              <div className="card reason-card" key={reason.title}>
                <div className="card-body">
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <div>
              <span className="badge">Book a Session</span>
              <h2>Ready to capture your next story?</h2>
              <p>
                Whether it’s a wedding, portrait session, or private event,
                Risuz Photography is ready to create timeless images for you.
              </p>
            </div>

            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Contact Me
              </Link>
              <Link to="/client-login" className="btn btn-secondary">
                Client Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;