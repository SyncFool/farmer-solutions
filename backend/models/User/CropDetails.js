const mongoose = require('mongoose');

const cropDetailsSchema = new mongoose.Schema({
  cropName: {
    type: String,
    required: true,
  },
  cropImage: {
    type: String, // Assuming you'll store the URL of the image
    
  },
  cropDescription: {
    type: String,
    required: true,
  },
  cropProducedSize: {
    type: String,
    required: true,
  },
  cropPrice: {
    type: Number,
    default: 0,
  },
  cropInStock: {
    type: Number,
    default: 0, // Assuming crops are initially out of stock until specified otherwise
  },
});

const CropDetails = mongoose.model('CropDetails', cropDetailsSchema);

module.exports = CropDetails;
