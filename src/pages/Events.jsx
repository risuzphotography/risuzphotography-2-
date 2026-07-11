import { motion } from "framer-motion";

function Events() {
  const events = [
    {
      title: "Saman Dewi Puda Waruna 2025",
      type: "Cultural Event",
      date: "September 2025",
      image: "/events/samanperahara.jpg",
      gallery: "https://photos.app.goo.gl/LQ6ALKweyJJjM2838",
    },

    {
      title: "Paradise Sweets Academy Graduation Ceremony",
      type: "Academic Event",
      date: "April 2026",
      image: "/events/paradiseacademy.jpg",
      gallery: "https://photos.app.goo.gl/bjuZTtp6GLC33382A",
    },

    {
      title: "Kahahena Dhamma School Prefects Ceremony",
      type: "Dhamma School Event",
      date: "July 2025",
      image: "/events/kahahena.jpg",
      gallery: "https://photos.app.goo.gl/eyWujpwcRSTeP3hL7",
    },

    {
      title: "Get Together 1998 ecc batch",
      type: "Get Together Event",
      date: "December 2025",
      image: "/events/GetTogether1998eccbatch.jpg",
      gallery: "https://photos.app.goo.gl/7yjwXu5KLnKG65bc7",
    },
  ];

  return (
    <>
      <section className="page-header">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Event Galleries</h1>

          <p>
            Browse every event photographed by Risuz Photography. Click any
            gallery to view the complete album.
          </p>
        </motion.div>
      </section>

      <section className="section">
        <div className="container">

          <div className="portfolio-page-grid">

            {events.map((event, index) => (

              <motion.a
                key={event.title}
                href={event.gallery}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-page-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .12,
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

                  <p>{event.date}</p>

                  <button className="btn btn-primary">
                    View Gallery
                  </button>

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