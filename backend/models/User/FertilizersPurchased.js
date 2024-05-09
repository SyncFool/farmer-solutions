const mongoose = require('mongoose');

const fertilizersPurchasedSchema = new mongoose.Schema({
  // Define fields for fertilizers purchased
  // For example:
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  // Add more fields as needed
});

const FertilizersPurchased = mongoose.model('FertilizersPurchased', fertilizersPurchasedSchema);

module.exports = FertilizersPurchased;
