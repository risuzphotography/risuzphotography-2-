import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
    <>
      <Navbar />

      <section className="page-header">
        <div className="container">
          <h1>Portfolio</h1>
          <p>
            Explore a collection of wedding stories, portraits, events, and
            creative sessions captured through Risuz Photography.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="portfolio-page-grid">
            {portfolioItems.map((item) => (
              <article className="card portfolio-page-card" key={item.title}>
                <div className="portfolio-page-image-wrap">
                  <img src={item.image} alt={item.title} className="portfolio-page-image" />
                  <span className="portfolio-category-badge">{item.category}</span>
                </div>

                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Portfolio;

