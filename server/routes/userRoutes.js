import express from 'express';
import { emailVerification, loginUser, logout, registerUser, verifyUser } from '../controllers/Users.js';
import { isAuthenticated, isAdmin } from '../middleware/authMiddleware.js'
import { errorHandler } from '../middleware/errorMiddleware.js'; 



const router = express.Router();

// Define routes
router.post('/register', registerUser );
router.post('/email-verification', emailVerification );
router.post('/create-user', isAuthenticated, isAdmin, loginUser);
router.post('/login',loginUser);
router.get('/user',isAuthenticated,verifyUser);
router.post('/logout',isAuthenticated,logout);




router.use(errorHandler);

export default router;
