const express = require('express'); 
const app = express();
const mongoose = require('mongoose'); 
const { resolve } = require('path');
const { connected } = require('process');

mongoose.connect('mongodb://127.0.0.1:27017/test')  
  .then(() => console.log('Connected!'));  

const Schema = Purachaseseeds.Schema({   
    Supplier:{
        Suppliername:String,
        Supplierinfo:String,
        location:string},
    Seed:{
        Seedid:Number,
        Name:string,
        variety:string,
        price:Number},
    Order:{
        Orderid:Number,
        Quantity:Number,
        Price:Number
    }
})

const Purachaseseeds = mongoose.model('Purchaseseeds',Schema);  
Purachaseseeds.create({
    Supplier:{
        Suppliername:"vivek",
        Supplierinfo:"ownerofshop",
        location:"mathura"},
    Seed:{
        Seedid:132433,
        Name:"zbc",
        variety:"pottasium",
        price:2000},
    Order:{
        Orderid:3435,
        Quantity:35445,
        Price:5000
    }     
})

User.find({}) 
.then((resolve)=>{
    console.log(resolve)
})