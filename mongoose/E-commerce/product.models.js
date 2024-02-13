const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    description: {
        required: true,
        type: String,
    },
    name: {
        required: true,
        type: String,
    },
    productImage: {
        type: String,
    },
    price: {
        type: Number,
        default: 0,
    },
     stock: {
        default: 0,
        type: Number,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
 },{ timestamps: true });

const Product = mongoose.model("product", productSchema);

module.exports = Product;