import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("risuzClientLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/client-login" replace />;
  }

  return children;
}

export default ProtectedRoute;