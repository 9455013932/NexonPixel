import Category from "../models/categoryModel.js";
import Product from "../models/productModel.js";

// Get all categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    console.log(categories);
    return res.status(200).json({ categories, success: true });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Add new category
export const addCategory = async (req, res) => {
  const { name, subname } = req.body;
  console.log(req.body);

  try {
    const newCategory = new Category({ name, subname });
    console.log("Before Save:", newCategory);
    
    await newCategory.save();
    console.log("After Save:", newCategory);

    return res.status(201).json({
      newCategory,
      message: "Category added successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error saving category:", error);
    res.status(500).json({ message: "Failed to add category", error: error.message });
  }
};

// Update a category
export const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    );
    return res
      .status(200)
      .json({
        updatedCategory,
        success: true,
        message: "Category updated successfully",
      });
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
};

// Delete a category
export const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Category deleted", success: true });
  } catch (error) {
    return res.status(500).json({ message: "Deletion failed" });
  }
};

//Produst controller
// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({ products, success: true });
  } catch {
    return res.status(500).json({ message: "Failed to get products" });
  }
};
//add a product
export const addProducts = async (req, res) => {
  try {
    console.log(req.body)
    const{name,productName,subname,image,description,price,stock}=req.body;
    const newProduct = new Product({
      name,
      productName,
      subname,
      image,
      description,
      price,
      stock
    });
    const fesd=await newProduct.save();
    console.log("test",fesd)
    return res.status(200).json({newProduct, success: true, message: `Product added successfully`, });
  } catch {
    return res.status(500).json({ message: "Failed to add product" });
  }
};

//update a product
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    );
    return res
      .status(200)
      .json({
        updatedProduct,
        success: true,
        message: "Product updated successfully ",
      });
  } catch (error) {
    return res.status(500).json({ message: "Update failed" });
  }
};

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

export const getdProductDetails=async(req,res)=>{
  const { id } = req.params;
  console.log(req.params)
  try {
    const product=await Product.findById(id);
    console.log(product)
    return res.status(200).json({product, success:true})
  } catch (error) {
    
  }
}