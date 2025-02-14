import jwt from 'jsonwebtoken';
import User from '../models/User.js';  

// Middleware to check if user is authenticated
export const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.authToken;
  if (!token) {
    return res.status(401).json({ error: 'No token provided, access denied' });
  }

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = user;

    next(); 
  } catch (error) {
    return res.status(401).json({ error: 'Token is invalid or expired' });
  }
};

// Optionally, you can use the `isAdmin` middleware to check if the user is an admin.
export const isAdmin = async (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();  // User is an admin, continue
  } else {
    return res.status(403).json({ error: 'You do not have permission to access this resource' });
  }
};
