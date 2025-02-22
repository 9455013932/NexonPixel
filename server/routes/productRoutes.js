import express from 'express';
import { addProduct, getAllProduct, getProductDetails, upload } from '../controllers/ProductController.js';


const router =express.Router()



router.post("/add", upload.fields([{ name: "images" }, { name: "videos" }]), addProduct);
router.get("/get:id", getAllProduct);
router.get("/get-product/:id", getProductDetails);


// router.post("/add",addProduct)


export default router;