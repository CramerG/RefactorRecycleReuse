const ProductController = require("../controllers/Product.controller");

module.exports = app => {
    app.get("/api/products", ProductController.findAllProducts);
    app.get("/api/products/:id", ProductController.findProductById);
    app.post("/api/products", ProductController.addProduct);
    app.put("/api/products/:id", ProductController.updateProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);
}