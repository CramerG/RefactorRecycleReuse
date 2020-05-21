const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title required"]
    },
    price: {
        type: Number,
        required: [true, "Price required"]
    },
    description: {
        type: String,
        required: [true, "Description required"]
    }
})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;