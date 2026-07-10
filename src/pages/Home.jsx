import SEO from "../components/SEO";
import Hero from "../components/Hero";
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
      text:
        "A modern visual style with natural storytelling, composition, and clean editing.",
    },
    {
      title: "Private Client Access",
      text:
        "Clients can log in and access their private Google Photos gallery with ease.",
    },
    {
      title: "Professional Delivery",
      text:
        "Fast communication, organized workflow, and polished final images.",
    },
  ];

  return (
    <>
      <SEO
        title="Risuz Photography | Wedding, Portrait & Event Photographer in Sri Lanka"
        description="Professional wedding, portrait, graduation and event photography by Risuz Photography. Timeless storytelling and premium photography services in Sri Lanka."
        keywords="Risuz Photography, Wedding Photographer Sri Lanka, Portrait Photographer, Event Photography, Graduation Photography, Photographer Sri Lanka"
      />

      <Hero />

      {/* ================= Featured Portfolio ================= */}

      <section className="section reveal">
        <div className="container">

          <div className="text-center reveal">
            <h2 className="section-title">Featured Portfolio</h2>

            <p className="section-subtitle">
              A look at the stories, portraits, and celebrations captured
              through Risuz Photography.
            </p>
          </div>

          <div className="grid grid-3">
            {portfolioItems.map((item, index) => (
              <div
                key={item.title}
                className={`card portfolio-card reveal-scale delay-${index + 1}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="portfolio-card-image"
                />

                <div className="card-body">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="home-section-action reveal">
            <Link to="/portfolio" className="btn btn-outline">
              View Full Portfolio
            </Link>
          </div>

        </div>
      </section>

      {/* ================= Services ================= */}

      <section className="section bg-light reveal">
        <div className="container">

          <div className="text-center reveal">
            <h2 className="section-title">
              Photography Services
            </h2>

            <p className="section-subtitle">
              Flexible photography services for weddings,
              portraits, events, and personal stories.
            </p>
          </div>

          <div className="grid grid-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`card service-card reveal delay-${index + 1}`}
              >
                <div className="card-body">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="home-section-action reveal">
            <Link to="/services" className="btn btn-primary">
              Explore Services
            </Link>
          </div>

        </div>
      </section>

      {/* ================= Why Choose ================= */}

      <section className="section reveal">
        <div className="container">

          <div className="text-center reveal">
            <h2 className="section-title">
              Why Choose Risuz Photography
            </h2>

            <p className="section-subtitle">
              Photography that focuses on emotion,
              detail, and a smooth client experience
              from booking to gallery delivery.
            </p>
          </div>

          <div className="grid grid-3">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`card reason-card reveal-scale delay-${index + 1}`}
              >
                <div className="card-body">
                  <h3>{reason.title}</h3>

                  <p>{reason.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="section cta-section reveal">
        <div className="container">

          <div className="cta-box reveal">

            <div>
              <span className="badge">
                Book a Session
              </span>

              <h2>
                Ready to capture your next story?
              </h2>

              <p>
                Whether it's a wedding, portrait session,
                or private event, Risuz Photography is
                ready to create timeless images for you.
              </p>
            </div>

            <div className="cta-actions">

              <Link
                to="/contact"
                className="btn btn-primary"
              >
                Contact Me
              </Link>

              <Link
                to="/client-login"
                className="btn btn-outline"
              >
                Client Login
              </Link>

            </div>

          </div>

        </div>
      </section>

    </>
  );
}

export default Home;