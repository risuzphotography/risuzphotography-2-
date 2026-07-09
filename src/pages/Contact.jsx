import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="page-header">
        <div className="container">
          <h1>Contact</h1>
          <p>
            Tell me about your event, portrait session, or photography idea. I’ll
            get back to you with availability and details.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info-card card">
            <div className="card-body">
              <span className="badge">Get in touch</span>
              <h2 className="section-title">Let’s plan your shoot</h2>
              <p className="contact-text">
                Whether you need wedding photography, portraits, event coverage,
                or a custom session, you can reach out with your details here.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <h3>Phone / WhatsApp</h3>
                  <p>Add your phone number here</p>
                </div>

                <div className="contact-detail-item">
                  <h3>Email</h3>
                  <p>your@email.com</p>
                </div>

                <div className="contact-detail-item">
                  <h3>Instagram</h3>
                  <p>@risuzphotography</p>
                </div>

                <div className="contact-detail-item">
                  <h3>Location</h3>
                  <p>Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card card">
            <div className="card-body">
              <h2 className="contact-form-title">Send an Inquiry</h2>

              <form className="contact-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="service">
                    Service Needed
                  </label>
                  <input
                    id="service"
                    type="text"
                    className="form-control"
                    placeholder="Wedding, portrait, event, etc."
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    placeholder="Tell me about your event, date, location, and what you need."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>

              <p className="contact-note">
                For now this form is a design-only form. Later we can connect it
                to Formspree or WhatsApp for free.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;