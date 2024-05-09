const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    default: "अज्ञातकृत",
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    default: Date.now,
  },
  gender: {
    type: String,
    default: "निर्दिष्ट नहीं है",
  },
  fathersName: {
    type: String,
    default: "अज्ञातकृत",
  },
  address: {
    type: String,
    default: "उपलब्ध नहीं कराया",
  },
  mobileNumber: {
    type: Number,
    default: 0,
  },
  accountNumber: {
    type: Number,
    default: 0,
  },
  ifscCode: {
    type: String,
    maxlength: 30,
    default: "उपलब्ध नहीं कराया",
  },
  monthlySales: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MonthlySales' }],
  expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Expenses' }],
  fertilizersPurchased: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FertilizersPurchased' }],
  cropDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CropDetails' }],
  wallet: {
    transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
    currentBalance: {
      type: Number,
      default: 0,
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  },
  tractorRented: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TractorRented' }],
});


const User = mongoose.model('User',UserSchema);

module.exports = User;
