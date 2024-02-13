const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: String,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItems: {
      type: [itemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
      default: 'PENDING',
    },
  }, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;