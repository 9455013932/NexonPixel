import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const PrivateRoute = ({ requiredRole }) => {
  const dispatch = useDispatch()
  const { user, status } = useSelector((state) => state.auth);
  // console.log("User from Redux:", user);

  useEffect(() => {
    if (!user && status === "idle") {
      dispatch(fetchUser()); // Fetch user data if not available
    }
  }, [user, status, dispatch]);

  if (status === "loading") {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Allow access if:
  // 1. The route does not require a specific role (i.e., it’s public)
  // 2. The user's role matches the required role
  // 3. The user is an admin (admins can access user routes)
  if (requiredRole && user.role !== requiredRole && user.role !== "admin") {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
