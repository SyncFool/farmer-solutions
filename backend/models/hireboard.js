const express = require('express'); 
const app = express();
const mongoose = require('mongoose'); 
const { resolve } = require('path');
const { connected } = require('process');

mongoose.connect('mongodb://127.0.0.1:27017/test')  
  .then(() => console.log('Connected!'));  

const Schema = Hireboard.Schema({   
    WorkersProfile:{
        Workername: String,
        Workernumber: Number,
        Workerlocation:String
    }, 
    Scheduling: Number,
    Payment: Number,
    Jobposting:String
})

const Hireboard = mongoose.model('Hireboard',Schema);
Hireboard.create({     
    WorkersProfile:{Workername:"prashant",
                    Workernumber:232435546,
                    Workerlocation:"vrindaban"},

    Scheduling: 10-11,
    Payment:"1000",
    Jobposting:"anywhwere"
})

User.find({}) 
.then((resolve)=>{
    console.log(resolve)
})