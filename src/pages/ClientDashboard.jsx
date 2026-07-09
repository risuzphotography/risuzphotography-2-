import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ClientDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("risuzClientLoggedIn");
    navigate("/client-login");
  };

  return (
    <>
      <Navbar />

      <section className="page-header">
        <div className="container">
          <h1>Client Dashboard</h1>
          <p>Your private gallery area for delivered photos and album links.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <span className="badge">Private Gallery</span>
              <h2 className="section-title" style={{ marginTop: "14px" }}>
                Welcome to your client area
              </h2>
              <p className="section-subtitle">
                Later, this page can show each client’s Google Photos album link,
                event name, gallery password, and delivery notes.
              </p>

              <div style={{ marginTop: "20px" }}>
                <a
                  href="https://photos.google.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ marginRight: "12px" }}
                >
                  Open Google Photos
                </a>

                <button onClick={handleLogout} className="btn btn-outline">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ClientDashboard;