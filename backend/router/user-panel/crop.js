const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const CropDetails = require("../../models/User/CropDetails");

// Define storage configuration for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/assets/crop/'); // Destination folder
  },
  filename: function (req, file, cb) {
    // Generate unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Append unique suffix to original filename
  },
});

// Initialize multer with the defined storage configuration
const upload = multer({ storage: storage });

// Route to handle file upload and add a new crop
router.post("/addCrop", upload.single('image'), async (req, res) => {
    try {
      console.log(req.file); // Log the uploaded file information
      
      // Create a new crop document using the CropDetails model
      const newCrop = new CropDetails({
        cropName: req.body.cropName,
        cropImage: req.file ? req.file.filename : "", // Use uploaded image filename if available
        cropDescription: req.body.cropDescription,
        cropProducedSize: req.body.cropProducedSize,
        cropPrice: req.body.cropPrice || 0, // Set default value to 0 if not provided
        cropInStock: req.body.cropInStock || false, // Set default value to false if not provided
      });
  
      // Save the crop document to the database
      const savedCrop = await newCrop.save();
  
      res.status(201).json(savedCrop); // Return the saved crop details as JSON response
    } catch (error) {
      console.error(error); // Log any errors
      res.status(400).json({ message: error.message });
    }
  });
  

module.exports = router;
