import React from "react";
import { motion } from "framer-motion";

function Portfolio() {
  const portfolioItems = [
    {
      title: "Wedding Photography",
      category: "Weddings",
      description:
        "Elegant storytelling, candid moments, couple portraits, and full wedding day coverage.",
      image:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Portrait Sessions",
      category: "Portraits",
      description:
        "Personal, graduation, and lifestyle portraits with a clean and expressive style.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Event Coverage",
      category: "Events",
      description:
        "Professional photography for birthdays, private events, celebrations, and gatherings.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Couple Shoots",
      category: "Lifestyle",
      description:
        "Natural and cinematic couple sessions designed around emotion, movement, and connection.",
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Graduation & Personal Sessions",
      category: "Portraits",
      description:
        "Celebrate milestones with polished portraits that feel natural and memorable.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Creative Lifestyle Photography",
      category: "Creative",
      description:
        "Visual storytelling sessions built around personality, mood, and location.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <section className="page-header">
        <motion.div
          className="container"
          initial={{
            opacity: 0,
            y: 60,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.9,
          }}
        >
          <h1>Portfolio</h1>

          <p>
            Explore a collection of wedding stories, portraits, events, and
            creative sessions captured through Risuz Photography.
          </p>
        </motion.div>
      </section>

      {/* Portfolio */}
      <section className="section">
        <div className="container">
          <div className="portfolio-page-grid">
            {portfolioItems.map((item, index) => (
              <motion.article
                key={item.title}
                className="card portfolio-page-card"
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.92,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -14,
                  scale: 1.03,
                }}
              >
                <div className="portfolio-page-image-wrap">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="portfolio-page-image"
                    whileHover={{
                      scale: 1.12,
                    }}
                    transition={{
                      duration: 0.7,
                    }}
                  />

                  <motion.span
                    className="portfolio-category-badge"
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.12 + 0.2,
                    }}
                  >
                    {item.category}
                  </motion.span>
                </div>

                <motion.div
                  className="card-body"
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12 + 0.3,
                  }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Portfolio;