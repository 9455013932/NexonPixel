import "dotenv/config";
import multer from "multer";
import { createClient } from "@supabase/supabase-js";
import Product from "../models/productModel.js";

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

export { supabase, upload };

// Upload to Supabase
const uploadToSupabase = async (file, path) => {
  const { data, error } = await supabase.storage
    .from("images") // Change this to your Supabase bucket name
    .upload(path, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) throw error;
  return `${process.env.SUPABASE_URL}/storage/v1/object/public/images/${path}`;
};

// Add Product
export const addProduct = async (req, res) => {
  try {
    console.log("Received Data:", req.body);

    let { name, heading, subDescription, description, plans, reviews } = req.body;

    // Parse JSON fields (Check if they exist before parsing)
    plans = plans ? JSON.parse(plans) : [];
    reviews = reviews ? JSON.parse(reviews) : [];

    // Upload images/videos to Supabase
    const imageUrls = [];
    const videoUrls = [];

    if (req.files?.images) {
      for (let file of req.files.images) {
        const url = await uploadToSupabase(file, `images/${Date.now()}-${file.originalname}`);
        imageUrls.push(url);
      }
    }

    if (req.files?.videos) {
      for (let file of req.files.videos) {
        const url = await uploadToSupabase(file, `videos/${Date.now()}-${file.originalname}`);
        videoUrls.push(url);
      }
    }

    // Save product in MongoDB
    const newProduct = new Product({
      name,
      heading,
      subDescription,
      description,
      plans,
      reviews,
      images: imageUrls,
      videos: videoUrls,
    });

    await newProduct.save();
    res.status(201).json({ message: "Product added successfully!", product: newProduct });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

export const getAllProduct=async(req,res)=>{
  try {
    console.log("first")
    const products = await Product.find().populate("plans").populate("reviews");
    return res.status(200).json({success:true, products});
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: error.message });
      }
}

// Middleware to handle file uploads
export const uploadFiles = upload.fields([{ name: "images", maxCount: 10 }, { name: "videos", maxCount: 5 }]);








// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    console.log(req.params._id)
    await Product.findByIdAndDelete(req.params._id);
    return res.status(200).json({ message: "Product deleted", success: true });
  } catch (error) {
    return res.status(500).json({ message: "Deletion failed" });
  }
};

export const getProductDetails=async(req,res)=>{
  const { id } = req.params;
  console.log(req.params)
  try {
    const product=await Product.findById(id);
    console.log(product)
    return res.status(200).json({product, success:true})
  } catch (error) {
    
  }
}
