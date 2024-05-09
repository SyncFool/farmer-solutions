const mongoose = require('mongoose');

const expensesSchema = new mongoose.Schema({
  // Define fields for expenses
  // For example:
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  // Add more fields as needed
});

const Expenses = mongoose.model('Expenses', expensesSchema);

module.exports = Expenses;
