import { logout } from "../redux/authSlice"; // Import Redux action if needed
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Logout = async (dispatch, navigate) => {
  console.log("Logging out...");

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include", // Ensures cookies are included in the request
    });

    if (response.ok) {
      console.log("Logout successful");
      dispatch(logout()); // Update Redux store
      navigate("/login"); // Redirect to login page
    } else {
      console.error("Failed to logout");
    }
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
