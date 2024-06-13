/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();
  if (loading) {
    return <progress className="progress w-56 progress-primary"></progress>;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/auth"} state={{ from: location }} replace />;
};

export default PrivateRoute;
