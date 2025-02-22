import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";

const secret_key = process.env.JWT_SECRET;
// Controller to create a new user
import crypto from "crypto";
import cryptoRandomString from "crypto-random-string";
import slugify from "slugify";
import { sendMail } from "../config/SendMail.js";
import OTPTemplate from "../config/otp.js";

// Controller to create a new user
export const registerUser = async (req, res) => {
  try {
    const {
      name,
      companyName,
      email,
      phone,
      country,
      state,
      password,
      confirmPassword,
    } = req.body;

    // Password Match Validation
    if (password !== confirmPassword) {
      return res.status(400).json({
        status: false,
        message: "Password & confirm password should match.",
      });
    }
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: false,
        message: "Email already exists. Please login.",
      });
    }

    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(password, salt); 
    // Create New User
    const user = new User({
      name,
      companyName,
      email,
      phone,
      country,
      state,
      password:hashedPassword,
    });

    const saveUser = await user.save();

    if (!saveUser) {
      return res.status(500).json({
        status: false,
        message: "Registration failed. Please try again later.",
      });
    }

    // Generate OTP for Email Verification
    const otp = cryptoRandomString({ length: 6, type: "numeric" });
    const hashedOtp = crypto
      .createHmac("sha256", process.env.TOKEN_SECRET)
      .update(otp)
      .digest("hex");

    // Send Verification Email
    const emailMessage = OTPTemplate(otp);
    const sendmail = await sendMail("Email verification", email, emailMessage);

    return res.status(201).json({
      status: true,
      message: "Registration successful. Please verify your email.",
      mail: sendmail,
      data: hashedOtp,
      email,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const emailVerification = async (req, res) => {
  try {
    const { otp, email, hashedOtp } = req.body;

    // Hash the received OTP to compare with the stored one
    const newHashedOtp = crypto
      .createHmac("sha256", process.env.TOKEN_SECRET)
      .update(otp)
      .digest("hex");

    // Find supplier by email
    const user = await User.findOne({ email }).lean();

    if (!user) {
      return res.status(400).json({
        status: false,
        message: "Verification failed.",
      });
    }

    if (hashedOtp === newHashedOtp) {
      // If not verified, update status
      if (!user.verified) {
        await User.findOneAndUpdate({ email }, { verified: true });
      }

      // Generate JWT Token
      const token = jwt.sign(user, process.env.TOKEN_SECRET, {
        expiresIn: "1d",
      });

      // Set HTTP-only cookie
      res.cookie("token", token, {
        httpOnly: false,
        secure: true,
        // sameSite: "none",
        // domain: ".expertsofdeals.com",
      });

      return res.status(200).json({
        status: true,
        message: "Verification successful.",
      });
    } else {
      return res.status(400).json({
        status: false,
        message: "Verification failed.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message:
        process.env.APP_ENV === "local"
          ? error.message
          : "Verification failed.",
      error,
    });
  }
};

// Other controllers (login, get user data, etc.) can go here
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(200)
        .json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    //creating JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "12h",
      }
    );

    // Creating cookies
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: true,
      maxAge: 3600000,
    });
    return res
      .status(200)
      .json({ success: true, message: "Login successful", token, user: user });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const verifyUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password"); // Exclude password
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("authToken");

  return res.json({ success: true, message: "Logged out successfully" });
};
