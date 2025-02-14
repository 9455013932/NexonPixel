import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

const secret_key = process.env.JWT_SECRET;
// Controller to create a new user
export const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password, confirmpassword } = req.body;
    if (password != confirmpassword) {
      return res
        .status(200)
        .json({ success: false, message: "Password do not match" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(200)
        .json({ success: false, message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res
      .status(201)
      .json({ success: true, message: "User created successfully", newUser });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create user", details: error.message });
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
    const token = jwt.sign({ id: user._id, role:user.role }, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });

    // Creating cookies
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: true,
      maxAge: 3600000,
    });
    return res.status(200).json({ success: true, message: "Login successful", token, user:user });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const verifyUser = async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findById(req.user._id).select("-password"); // Exclude password
    console.log("cont",user)
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const logout =async (req,res)=>{
  res.clearCookie("authToken");
  
    return res.json({success:true,message:"Logged out successfully"})
}
