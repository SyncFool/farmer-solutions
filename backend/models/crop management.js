const express = require('express'); 
const app = express();
const mongoose = require('mongoose'); 
const { resolve } = require('path');
const { connected } = require('process');

mongoose.connect('mongodb://127.0.0.1:27017/test')  
  .then(() => console.log('Connected!'));  

const Schema = CropManagement.Schema({   
    NameofCrop: String, 
    VarietyofCrop: String,
    QuantityofCrops: Number,
})

const CropManagement = mongoose.model('CropManagement',Schema);  
CropManagement.create({     
    NameofCrop:"kharif,rabi,cash,plantation",  
    VarietyofCrop : "summer,winter",
    QuantityofCrops:"22",
})

User.find({}) 
.then((resolve)=>{
    console.log(resolve)
})