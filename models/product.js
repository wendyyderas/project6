const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
    ProductName:String,
    ProductType: String,
    Description: String,
    ShelfLife: Number,
    Price: Number,
    Stock: Number,
    UrlImg: String
})
const Product = mongoose.model('Product', productSchema)
module.exports = Product;

