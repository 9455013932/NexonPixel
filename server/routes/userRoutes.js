import express from 'express';
import { createUser,loginUser, logout, verifyUser } from '../controllers/Users.js';
import { isAuthenticated, isAdmin } from '../middleware/authMiddleware.js'
import { errorHandler } from '../middleware/errorMiddleware.js'; 



const router = express.Router();

// Define routes
router.post('/signup', createUser );
router.post('/create-user', isAuthenticated, isAdmin, loginUser);
router.post('/login',loginUser);
router.get('/me',isAuthenticated,verifyUser);
router.post('/logout',isAuthenticated,logout);




router.use(errorHandler);

export default router;
