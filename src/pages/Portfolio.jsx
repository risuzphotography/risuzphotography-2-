import React from "react";
import { motion } from "framer-motion";

function Portfolio() {
  const portfolioItems = [
    {
      title: "Weddings",
      category: "Luxury Collection",
      description:
        "Elegant storytelling, candid moments, emotional ceremonies, and timeless portraits that preserve every unforgettable moment of your special day.",
      image:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=80",
      link: "#",
      comingSoon: true,
    },
    {
      title: "Portraits",
      category: "Luxury Collection",
      description:
        "Professional and creative portraits that capture personality, confidence, and genuine expressions for individuals, couples, and professionals.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=80",
      link: "#",
      comingSoon: true,
    },

    {
      title: "Events",
      category: "Luxury Collection",
      description:
        "From corporate functions to private celebrations, we document every important moment with natural, vibrant, and authentic photography.",
      image:
       "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80",
      link: "/events",
      comingSoon: false,
},

    {
      title: "Engagements",
      category: "Luxury Collection",
      description:
        "Romantic pre-wedding sessions featuring genuine emotions, beautiful locations, and timeless imagery that celebrates your love story.",
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=80",
      link: "#",
      comingSoon: true,
    },
    {
      title: "Commercial",
      category: "Luxury Collection",
      description:
        "High-quality photography for brands, businesses, products, and marketing campaigns designed to elevate your visual identity.",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
      link: "#",
      comingSoon: true,
    },
    {
      title: "Real Estate",
      category: "Luxury Collection",
      description:
        "Bright, professionally composed interior and exterior photography that showcases properties with clarity, style, and maximum visual appeal.",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
      link: "#",
      comingSoon: true,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Header */}
      <section className="page-header">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Portfolio</h1>

          <p>
            Discover a curated collection of weddings, portraits, events,
            commercial projects, and lifestyle photography created with timeless
            storytelling and refined visual artistry.
          </p>
        </motion.div>
      </section>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="container">

          <div className="portfolio-page-grid">

            {portfolioItems.map((item, index) => (

              <motion.a
                href={item.comingSoon ? "#" : item.link}
                key={item.title}
                className="card portfolio-page-card"
                initial={{
                  opacity: 0,
                  y: 80,
                  rotateX: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
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
                      duration: 0.6,
                    }}
                  />

                  <span className="portfolio-category-badge">
                    {item.category}
                  </span>

                  {item.comingSoon && (
                    <motion.div
                      className="portfolio-coming-soon"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.35 }}
                    >
                      <h3>Coming Soon</h3>
                      <p>
                        This gallery will be available soon.
                      </p>
                    </motion.div>
                  )}

                </div>

                <div className="card-body">

                  <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.25 + index * 0.08,
                    }}
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.35 + index * 0.08,
                    }}
                  >
                    {item.description}
                  </motion.p>

                </div>

              </motion.a>

            ))}

          </div>

        </div>
      </section>
    </motion.div>
  );
}

export default Portfolio;