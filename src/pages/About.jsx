import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function About() {
  const highlights = [
    {
      title: "Story-Driven Photography",
      text: "I focus on capturing genuine moments, emotions, and details that make every session feel personal and timeless.",
    },
    {
      title: "Clean Modern Editing",
      text: "My editing style is polished, natural, and consistent so your gallery feels elegant and professional.",
    },
    {
      title: "Client-Focused Experience",
      text: "From planning to delivery, I aim to make the process smooth, comfortable, and memorable for every client.",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="page-header">
        <div className="container">
          <h1>About Risuz Photography</h1>
          <p>
            I create photography that preserves emotion, connection, and the
            moments that matter most — from weddings and portraits to private
            events and personal stories.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-content">
            <span className="badge">Behind the Camera</span>
            <h2 className="section-title">Photography with emotion, detail, and style.</h2>

            <p className="about-text">
              Risuz Photography is built around storytelling. My goal is not just
              to take photos, but to create images that feel meaningful, clean,
              and timeless. Every wedding, portrait, or event has its own energy,
              and I work to capture that naturally.
            </p>

            <p className="about-text">
              I believe the best photos come from real connection, comfort, and
              trust. That’s why I focus on making every client feel relaxed while
              still delivering a polished and professional result.
            </p>

            <div className="about-actions">
              <Link to="/portfolio" className="btn btn-primary">
                View Portfolio
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>
          </div>

          <div className="about-image-card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
              alt="Photographer at work"
            />
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">What I Focus On</h2>
            <p className="section-subtitle">
              A photography experience built around quality, creativity, and a
              smooth client journey.
            </p>
          </div>

          <div className="grid grid-3">
            {highlights.map((item) => (
              <div className="card about-highlight-card" key={item.title}>
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-cta-box">
          <div>
            <span className="badge">Let’s create something memorable</span>
            <h2>Ready to work together?</h2>
            <p>
              Whether you need wedding coverage, portraits, or event photography,
              I’d love to hear about your plans and help bring them to life.
            </p>
          </div>

          <Link to="/contact" className="btn btn-secondary">
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;