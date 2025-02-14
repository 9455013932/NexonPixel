import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext.jsx";

const PrivateRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, user } = useContext(AuthContext);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; 
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />; 
  }

  if (user?.role !== requiredRole) {
    return <Navigate to="/unauthorized" />; 
  }

  return children; 
};

export default PrivateRoute;