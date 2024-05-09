const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  // Define fields for transaction
  // For example:
  type: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  // Add more fields as needed
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
