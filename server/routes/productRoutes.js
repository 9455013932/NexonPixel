import express from 'express';
import { addCategory, addProducts, deleteCategory, deleteProduct, getAllProducts, getCategories, getdProductDetails, updateCategory, updateProduct } from '../controllers/ProductController.js';


const router =express.Router()


//categories routes
router.get("/categories/", getCategories);
router.post("/categories/add", addCategory);
router.put(`/categories/update/:_id`, updateCategory);
router.delete("/categories/delete/:id", deleteCategory);

router.post("/add",addProducts)
router.get("/get",getAllProducts)
router.put("/update/:_id",updateProduct)
router.delete("/delete/:_id",deleteProduct)

router.post("/:id",getdProductDetails)

export default router;