// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsController");

router.get("/", productController.getProducts);

router.get("/products-add", productController.addProductPage);

router.post("/products-add", productController.addProduct);
router.get("/view-product/:id", productController.viewProduct);
router.post('/delete/:id', productController.deleteProduct);
router.get('/product-edit/:id', productController.getUpdateProductPage);
router.post('/product-edit/:id', productController.updateProduct);


module.exports = router;
