import mongoose from "mongoose";

const planSchema = new mongoose.Schema({
  name: String,
  price: String,
  deliveryTime: String,
  revisions: String,
  features: String,
});

const reviewSchema = new mongoose.Schema({
  name: String,
  description: String,
  videoUrl: String, // Store Supabase URL
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  heading: String,
  subDescription: String,
  description: String,
  plans: [planSchema],
  reviews: [reviewSchema],
  images: [String], // Store Supabase URLs
  videos: [String], // Store Supabase URLs
});

const Product = mongoose.model("Product", productSchema);

export default Product;
