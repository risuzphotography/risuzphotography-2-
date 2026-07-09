import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ClientLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    clientId: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // temporary demo login
    if (formData.clientId === "client" && formData.password === "1234") {
      localStorage.setItem("risuzClientLoggedIn", "true");
      navigate("/client-dashboard");
    } else {
      setError("Invalid client ID or password.");
    }
  };

  return (
    <>
      <Navbar />

      <section className="page-header">
        <div className="container">
          <h1>Client Login</h1>
          <p>Access your private photo gallery here.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "520px" }}>
          <div className="card">
            <div className="card-body">
              <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "10px" }}>
                Private Gallery Access
              </h2>
              <p className="section-subtitle" style={{ marginBottom: "24px" }}>
                Demo login for now. Later we can connect this to your real client gallery system.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="clientId">
                    Client ID
                  </label>
                  <input
                    id="clientId"
                    name="clientId"
                    type="text"
                    className="form-control"
                    value={formData.clientId}
                    onChange={handleChange}
                    placeholder="Enter client ID"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                  />
                </div>

                {error && (
                  <p style={{ color: "crimson", marginBottom: "16px" }}>{error}</p>
                )}

                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  Login
                </button>
              </form>

              <p className="contact-note" style={{ marginTop: "18px" }}>
                Demo login: <strong>client</strong> / <strong>1234</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ClientLogin;