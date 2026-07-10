import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Wedding Photography",
      description:
        "Coverage for weddings, engagements, and couple moments with a timeless storytelling style.",
      includes: [
        "Bride & groom portraits",
        "Ceremony coverage",
        "Candid family moments",
        "Edited gallery delivery",
      ],
    },
    {
      title: "Portrait Sessions",
      description:
        "Personal, graduation, and lifestyle portraits with natural posing and clean editing.",
      includes: [
        "Individual portrait sessions",
        "Graduation photography",
        "Lifestyle and outdoor shoots",
        "Professionally edited images",
      ],
    },
    {
      title: "Event Coverage",
      description:
        "Photography for birthdays, private functions, celebrations, and special occasions.",
      includes: [
        "Birthday parties",
        "Private events",
        "Group photos",
        "Highlight moments captured naturally",
      ],
    },
    {
      title: "Couple Shoots",
      description:
        "Creative pre-shoot and couple sessions focused on emotion, movement, and connection.",
      includes: [
        "Outdoor or indoor sessions",
        "Creative posing guidance",
        "Edited gallery delivery",
        "Memorable storytelling moments",
      ],
    },
    {
      title: "Graduation & Milestone Sessions",
      description:
        "Celebrate achievements with polished portraits and memorable storytelling images.",
      includes: [
        "Graduation portraits",
        "Friends & family shots",
        "Milestone celebrations",
        "Edited online gallery",
      ],
    },
    {
      title: "Custom Photography Requests",
      description:
        "Need something different? Risuz Photography can discuss custom coverage based on your event or concept.",
      includes: [
        "Flexible session planning",
        "Custom event discussions",
        "Creative concept shoots",
        "Private gallery delivery",
      ],
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="page-header">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Services</h1>

          <p>
            Photography services designed for weddings, portraits, events, and
            personal stories — with a smooth experience from booking to final
            gallery delivery.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="services-page-grid">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                className="card service-page-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
              >
                <div className="card-body">
                  <h3>{service.title}</h3>

                  <p className="service-page-description">
                    {service.description}
                  </p>

                  <ul className="service-feature-list">
                    {service.includes.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: i * 0.08,
                          duration: 0.35,
                        }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="service-card-action">
                    <Link to="/contact" className="btn btn-primary">
                      Book This Service
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-light">
        <div className="container">
          <motion.div
            className="services-cta-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <span className="badge">Need a custom shoot?</span>

              <h2>Let's plan a session that fits your story.</h2>

              <p>
                If your event or photography idea doesn't fit a standard
                category, you can still get in touch for a custom session plan.
              </p>
            </div>

            <Link to="/contact" className="btn btn-primary">
              Contact for Details
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Services;