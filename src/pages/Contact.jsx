import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  const cards = [
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      subtitle: "Fastest way to reach me",
      value: "+94 76 114 5268",
      gradient: "linear-gradient(135deg,#25D366,#1ebe5d)",
      link: "https://wa.me/94761145268",
      button: "Chat Now",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call",
      subtitle: "Talk directly for bookings",
      value: "076 114 5268",
      gradient: "linear-gradient(135deg,#40E0D0,#00bcd4)",
      link: "tel:+94761145268",
      button: "Call Now",
    },
    {
      icon: <FaFacebookF />,
      title: "Facebook",
      subtitle: "See updates and connect",
      value: "Risuz Photography",
      gradient: "linear-gradient(135deg,#1877F2,#0d5ed7)",
      link: "https://web.facebook.com/Risuzphotography/",
      button: "Visit Page",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      subtitle: "For inquiries and bookings",
      value: "risuzphotography@gmail.com",
      gradient: "linear-gradient(135deg,#7c3aed,#a855f7)",
      link: "mailto:risuzphotography@gmail.com",
      button: "Send Email",
    },
  ];

  return (
    <section className="contact-page">
      <div className="contact-bg-glow contact-bg-glow-1"></div>
      <div className="contact-bg-glow contact-bg-glow-2"></div>

      <div className="container contact-page-content">

        <motion.div
          className="section-heading contact-heading"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">Get In Touch</span>

          <h1>Let's plan your next shoot</h1>

          <p>
            For bookings, portraits, weddings, events and custom photography,
            contact Risuz Photography using any method below.
          </p>
        </motion.div>

        <div className="contact-card-grid">
          {cards.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.link}
              target={card.link.startsWith("http") ? "_blank" : undefined}
              rel={card.link.startsWith("http") ? "noreferrer" : undefined}
              className="contact-card"
              initial={{
                opacity: 0,
                y: 70,
                rotateX: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.05,
                rotateY: 4,
              }}
            >
              <div
                className="contact-card-icon"
                style={{
                  background: card.gradient,
                }}
              >
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              <p className="contact-card-subtitle">
                {card.subtitle}
              </p>

              <p className="contact-card-value">
                {card.value}
              </p>

              <div
                className="contact-card-button"
                style={{
                  background: card.gradient,
                }}
              >
                {card.button}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="contact-cta-banner"
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="contact-cta-text">
            <span className="section-tag">
              Bookings Open
            </span>

            <h2>
              Ready to book your photography session?
            </h2>

            <p>
              Message me on WhatsApp and let's discuss your wedding,
              portrait session or event.
            </p>
          </div>

          <motion.a
            href="https://wa.me/94761145268"
            target="_blank"
            rel="noreferrer"
            className="contact-cta-button"
            whileHover={{
              scale: 1.08,
            }}
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}