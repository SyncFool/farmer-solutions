const mongoose = require('mongoose');

const tractorRentedSchema = new mongoose.Schema({
  // Define fields for tractor rented
  // For example:
  tractorModel: {
    type: String,
    required: true,
  },
  rentAmount: {
    type: Number,
    required: true,
  },
  // Add more fields as needed
});

const TractorRented = mongoose.model('TractorRented', tractorRentedSchema);

module.exports = TractorRented;
