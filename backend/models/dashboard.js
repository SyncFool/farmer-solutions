const express = require('express'); 
const app = express();
const mongoose = require('mongoose');  
const { resolve } = require('path');
const { connected } = require('process');

mongoose.connect('mongodb://127.0.0.1:27017/test') 
  .then(() => console.log('Connected!')); 

const Schema = Dashboard.Schema({     
    admin: String,  
    farmers: String,
    labours: String,
    shopowner:{
        forgoods: Number,
        forotheritems: Number}
})

const Dashboard = mongoose.model('Dashboard',Schema);  
Dashboard.create({     
    admin:"Prashant",  
    farmers : "prashants@123",
    labours:"22",
    shopowner:{
        forgoods: 123,
        forotheritems:234
    }
})

User.find({}) 
.then((resolve)=>{
    console.log(resolve)
})