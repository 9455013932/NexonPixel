import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoutes from "./routes/userRoutes.js"; 
import productrRoutes from "./routes/productRoutes.js"; 
import { errorHandler } from './middleware/errorMiddleware.js';
import cors from "cors"
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cookieParser());

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',  // Frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization','Cookie'],  // Allowed headers
  credentials: true,
}));

// Connect to the database
connectDB();

// Set up routes
app.use("/auth/users", userRoutes);
app.use("/product", productrRoutes);


// Use the error handler as the last middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
