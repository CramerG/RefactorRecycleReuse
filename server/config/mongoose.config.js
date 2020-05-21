const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/productsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log("Database Connection Established"))
    .catch( err => console.log("Error connecting to database", err))