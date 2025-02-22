import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  TextField,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import logo from "../../assets/logo2.png";
import {
  HiMail,
  HiPhone,
  HiUser,
  HiLocationMarker,
} from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsBuildingsFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import OtpVerification from "./OtpVerification";
import { COUNTRY } from "../utils/Constant";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [hashOtp, setHashOtp] = useState();
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState();

  const handleFormInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        formData,
        {
          headers: { "Content-type": "application/json" },
        }
      );

      let data = response.data;
      if (data.status) {
        setHashOtp(data.data);
        setRegisteredEmail(data.email);
        toast.success(data.message);
        setShowOtpForm(true);
        setFormData({});
        setError({});
      } else {
        setError(data.error || {});
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }

    setLoading(false);
  };

  return (
    <>
      <ToastContainer />
      <div className="h-screen w-screen flex justify-center items-center p-4">
        <Card className="w-[550px] p-3">
          <CardContent>
            {!showOtpForm ? (
              <form onSubmit={handleSubmit}>
                <div className="flex justify-center mb-3">
                  <Link to="/">
                    <img src={logo} height={12} alt="NexonPixel" />
                  </Link>
                </div>
                <div className="text-center mb-5">
                  <h4 className="text-xl font-semibold text-cblue mb-2">
                    Get started on your journey!
                  </h4>
                </div>

                <div className="flex gap-3 mb-5">
                  <TextField
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={formData.name || ""}
                    onChange={handleFormInput}
                    error={!!error.name}
                    helperText={error.name}
                  />
                  <TextField
                    label="Company Name"
                    variant="outlined"
                    fullWidth
                    name="companyName"
                    value={formData.companyName || ""}
                    onChange={handleFormInput}
                    error={!!error.companyName}
                    helperText={error.companyName}
                  />
                </div>

                <div className="flex gap-3 mb-5">
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    value={formData.email || ""}
                    onChange={handleFormInput}
                    error={!!error.email}
                    helperText={error.email}
                  />
                  <TextField
                    label="Phone Number"
                    type="number"
                    variant="outlined"
                    fullWidth
                    name="phone"
                    value={formData.phone || ""}
                    onChange={handleFormInput}
                    error={!!error.phone}
                    helperText={error.phone}
                  />
                </div>

                <div className="flex gap-3 mb-5">
                  <TextField
                    select
                    label="Country"
                    variant="outlined"
                    fullWidth
                    name="country"
                    value={formData.country || ""}
                    onChange={handleFormInput}
                    error={!!error.country}
                    helperText={error.country}
                  >
                    {COUNTRY.map((countryItem) => (
                      <MenuItem key={countryItem.name} value={countryItem.name}>
                        {countryItem.name}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    label="State"
                    variant="outlined"
                    fullWidth
                    name="state"
                    value={formData.state || ""}
                    onChange={handleFormInput}
                    error={!!error.state}
                    helperText={error.state}
                  />
                </div>

                <div className="flex gap-3 mb-5">
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    name="password"
                    value={formData.password || ""}
                    onChange={handleFormInput}
                    error={!!error.password}
                    helperText={error.password}
                  />
                  <TextField
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    name="confirmPassword"
                    value={formData.confirmPassword || ""}
                    onChange={handleFormInput}
                    error={!!error.confirmPassword}
                    helperText={error.confirmPassword}
                  />
                </div>

                <div className="mb-5">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={loading}
                  >
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Sign Up"}
                  </Button>
                </div>

                <div>
                  <p className="text-center text-xs">
                    Already have an account?
                    <Link to="/login" className="text-cblue hover:underline ms-1">
                      Login now!
                    </Link>
                  </p>
                </div>
              </form>
            ) : (
              <OtpVerification email={registeredEmail} hashedOtp={hashOtp} />
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}