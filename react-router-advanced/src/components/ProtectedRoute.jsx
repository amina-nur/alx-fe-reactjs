import { Navigate } from "react-router-dom";

// Simulated authorization status
const isAuthenticated = false; // Change to true to test redirection

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
