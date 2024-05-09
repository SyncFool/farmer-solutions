const mongoose = require('mongoose');

const monthlySalesSchema = new mongoose.Schema({
  // Define fields for monthly sales
  // For example:
  month: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  // Add more fields as needed
});

const MonthlySales = mongoose.model('MonthlySales', monthlySalesSchema);

module.exports = MonthlySales;
