
const Product = require('../models/Product');


exports.getProducts = async (req, res) => {
    const products = await Product.find();
    res.render('products', { products }); 
};


exports.addProductPage = (req, res) => {
    res.render('products-add'); 
};


exports.addProduct = async (req, res) => {
    await Product.create(req.body); 
    res.redirect('/'); 
};
exports.viewProduct = async (req, res) => {
    const id = req.params.id;
    const products = await Product.findById(id); 
    res.render('view-product', { products }); 
};
exports.deleteProduct = async (req, res) => {
    const id = req.params.id;

    await Product.findByIdAndDelete(id);
    res.redirect('/'); 
};
exports.getUpdateProductPage = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id); 

    res.render('product-edit', { product }); 
};


exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    const update = req.body;

    await Product.findByIdAndUpdate(id, update); 
    res.redirect(`/view-product/${id}`); 
};