import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { fetchUser } from "../../redux/authSlice";
import logo from "../../assets/logo2.png";
import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [passwordResetEmail, setPasswordResetEmail] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      const data = response.data;
      if (data.success) {
        toast.success("Login Successful");
        dispatch(fetchUser()); // Fetch user details and store in Redux
        navigate("/"); // Redirect to home page
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
    setLoading(false);
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setResetLoading(true);
    try {
      const response = await axios.post("/api/auth/password-reset/get-link", {
        email: passwordResetEmail,
      });
      const data = response.data;
      if (data.status) {
        setPasswordResetEmail("");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setResetLoading(false);
  };

  return (
    <>
      <ToastContainer />
      <div className="h-screen flex justify-center items-center p-4">
        <div className="bg-white shadow-lg p-6 rounded-md w-96">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center mb-3">
              <img src={logo} alt="Logo" className="h-10" />
            </div>
            <h4 className="text-2xl font-semibold text-center mb-5">Welcome Back!</h4>
            <div className="mb-4 flex items-center border rounded-md px-3 py-2">
              <HiMail className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                className="w-full outline-none"
                onChange={handleFormInput}
                value={formData.email}
                placeholder="Enter your registered email"
                required
              />
            </div>
            <div className="mb-4 flex items-center border rounded-md px-3 py-2">
              <RiLockPasswordFill className="text-gray-500 mr-2" />
              <input
                type="password"
                name="password"
                className="w-full outline-none"
                onChange={handleFormInput}
                value={formData.password}
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <p
              className="text-center text-xs text-blue-600 hover:underline mt-3 cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              Forgot Password?
            </p>
          </form>
        </div>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-md w-96">
              <h4 className="text-lg font-semibold mb-4">Reset Password</h4>
              <form onSubmit={handlePasswordReset}>
                <input
                  type="email"
                  className="w-full border px-3 py-2 rounded-md mb-4 outline-none"
                  placeholder="Enter your email"
                  onChange={(e) => setPasswordResetEmail(e.target.value)}
                  value={passwordResetEmail}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                  disabled={resetLoading}
                >
                  {resetLoading ? "Sending..." : "Send Link"}
                </button>
              </form>
              <button onClick={() => setShowModal(false)} className="mt-4 w-full text-center text-gray-600 hover:underline">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
