const Product = require("../models/Product.model");

module.exports.addProduct = (req, res) => {
    const {title, price, description} = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(newProduct => res.json( {product: newProduct}))
        .catch(err => res.json({ message:"Error adding new product", error: err}));
};

module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json( { message:"Error finding all products", error: err } ));
}

module.exports.findProductById = (req, res) => {
    Product.findOne( { _id: req.params.id } )
        .then(product => res.json(product))
        .catch(err => res.json( { message: "Error finding product by ID", error: err } ));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate( { _id: req.params.id }, req.body, {new: true} )
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json({message: "Error updating product", error: err}));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne( { _id:req.params.id } )
        .then(deleteConf => res.json(deleteConf))
        .catch(err => res.json( {message: "Error deleting product", error: err }));
}