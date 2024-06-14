/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const AdminRoute = ({ children }) => {
  const { user, role, loading } = useAuthContext();
  const location = useLocation();
  if (loading) {
    return <progress className="progress w-56 progress-primary"></progress>;
  }

  if (user && role === "admin") {
    return children;
  }
  return <Navigate to={"/auth"} state={{ from: location }} replace />;
};

export default AdminRoute;
