// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

// Fake auth check
const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true";
};

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
