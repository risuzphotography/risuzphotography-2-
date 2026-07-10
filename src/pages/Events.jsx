import { motion } from "framer-motion";

function Events() {
  const events = [
    {
      title: "Coming Soon",
      type: "School Event",
      image: "/portfolio/coming-soon.jpg",
      link: "#",
    },

    {
      title: "Coming Soon",
      type: "Birthday",
      image: "/portfolio/coming-soon.jpg",
      link: "#",
    },

    {
      title: "Coming Soon",
      type: "Corporate Event",
      image: "/portfolio/coming-soon.jpg",
      link: "#",
    },

    {
      title: "Coming Soon",
      type: "Wedding Reception",
      image: "/portfolio/coming-soon.jpg",
      link: "#",
    },
  ];

  return (
    <>
      <section className="page-header">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Events</h1>

          <p>
            Browse photography collections from events captured by Risuz
            Photography.
          </p>
        </motion.div>
      </section>

      <section className="section">
        <div className="container">

          <div className="portfolio-page-grid">

            {events.map((event, index) => (

              <motion.a
                key={index}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-page-card"
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
              >
                <div className="portfolio-page-image-wrap">

                  <img
                    src={event.image}
                    alt={event.title}
                    className="portfolio-page-image"
                  />

                  <span className="portfolio-category-badge">
                    {event.type}
                  </span>

                </div>

                <div className="card-body">

                  <h3>{event.title}</h3>

                  <p>
                    Click to view the full Google Photos gallery.
                  </p>

                </div>

              </motion.a>

            ))}

          </div>

        </div>
      </section>
    </>
  );
}

export default Events;