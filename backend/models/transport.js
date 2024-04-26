const express = require('express'); 
const app = express();
const mongoose = require('mongoose'); 
const { resolve } = require('path');
const { connected } = require('process');

mongoose.connect('mongodb://127.0.0.1:27017/test')  
  .then(() => console.log('Connected!'));  

const Schema = Transport.Schema({   
    Driver:{
        Drivername:String,
        Driverno:Number,
        licenseno:string},
    Transporttask:{
        Routefortransport:location,
        Scheduledate:Date,
        Amountchargebydriver:Number,
        Weight:Number},
    Typeofvehiclerequired:{
        Tractor:Number,
        Truck:Number,
    }
})

const Transport = mongoose.model('Transport',Schema);  
Transport.create({
    Driver:{
        Drivername:"Sumit",
        Driverno:3478343874,
        licenseno:"UP8523485"},
    Transporttask:{
        Routefortransport:"GUJRAT",
        Scheduledate:"11 APRIL2024",
        Amountchargebydriver:46657677676,
        Weight:556},
    Typeofvehiclerequired:{
        Tractor:2,
        Truck:5,
    }
    
})

User.find({}) 
.then((resolve)=>{
    console.log(resolve)
})