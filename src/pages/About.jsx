import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}

      <section className="page-header">
        <motion.div
          className="container"
          initial={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(15px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
          }}
        >
          <motion.h1
            initial={{ letterSpacing: "15px", opacity: 0 }}
            animate={{ letterSpacing: "2px", opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Risuz Photography
          </motion.h1>

          <motion.p
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: .3,
              duration: .8,
            }}
          >
            I create photography that preserves emotion, connection and the
            moments that matter most—from weddings and portraits to private
            events and personal stories.
          </motion.p>
        </motion.div>
      </section>

      {/* About */}

      <section className="section">
        <div className="container about-grid">

          <motion.div
            className="about-content"
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: .8,
            }}
          >
            <span className="badge">Behind the Camera</span>

            <h2 className="section-title">
              Photography with emotion, detail, and style.
            </h2>

            <motion.p
              className="about-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: .2 }}
            >
              Risuz Photography is built around storytelling. My goal is not
              just to take photos, but to create images that feel meaningful,
              clean, and timeless. Every wedding, portrait, or event has its
              own energy, and I work to capture that naturally.
            </motion.p>

            <motion.p
              className="about-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: .4 }}
            >
              I believe the best photos come from real connection, comfort,
              and trust. That's why I focus on making every client feel
              relaxed while still delivering a polished and professional
              result.
            </motion.p>

            <motion.div
              className="about-actions"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: .5 }}
            >
              <Link to="/portfolio" className="btn btn-primary">
                View Portfolio
              </Link>

              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-image-card"
            initial={{
              opacity: 0,
              x: 80,
              rotate: 4,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: .9,
            }}
            whileHover={{
              y: -10,
            }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
              alt="Photographer at work"
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: .8,
              }}
            />
          </motion.div>

        </div>
      </section>

      {/* Highlights */}

      <section className="section bg-light">
        <div className="container">

          <motion.div
            className="text-center"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">What I Focus On</h2>

            <p className="section-subtitle">
              A photography experience built around quality, creativity and a
              smooth client journey.
            </p>
          </motion.div>

          <div className="grid grid-3">

            {highlights.map((item, index) => (

              <motion.div
                key={item.title}
                className="card about-highlight-card"
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: .9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .18,
                  duration: .7,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
              >
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>

            ))}

          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="section">
        <div className="container">

          <motion.div
            className="about-cta-box"
            initial={{
              opacity: 0,
              scale: .9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: .8,
            }}
            whileHover={{
              scale: 1.02,
            }}
          >
            <div>
              <span className="badge">
                Let's create something memorable
              </span>

              <h2>Ready to work together?</h2>

              <p>
                Whether you need wedding coverage, portraits or event
                photography, I'd love to hear about your plans and help bring
                them to life.
              </p>
            </div>

            <Link to="/contact" className="btn btn-outline">
              Get in Touch
            </Link>

          </motion.div>

        </div>
      </section>
    </motion.main>
  );
}

export default About;