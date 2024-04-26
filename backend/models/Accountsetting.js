const express = require('express'); 
const app = express();
const mongoose = require('mongoose'); 
const { resolve } = require('path');
const { connected } = require('process');

mongoose.connect('mongodb://127.0.0.1:27017/test')  
  .then(() => console.log('Connected!'));  

const Schema = Accountsetting.Schema({   
    User:{
        Userid: Number,
        Username: String,
        Userno:Number,
        Userlocation:string},
    Securitysetting:{
        Securityid:Number,
        Userid:Number,
        Loginhistory:string,
        passwordexpire:Number},
    Preferences:{
        Preferenceid:Number,
        Language:string,
        Theme:string
        }
})

const Accountsetting = mongoose.model('Accountsetting',Schema);
Accountsetting.create({ 
    User:{
        Userid: 67545,
        Username: "Lucky",
        Userno:347343,
        Userlocation:"vrindaban"},
    Securitysetting:{
        Securityid:3646734,
        Userid:8734873,
        Loginhistory:"saved",
        passwordexpire:16},
    Preferences:{
        Preferenceid:343,
        Language:"english",
        Theme:"green"
        }    
    
})

User.find({}) 
.then((resolve)=>{
    console.log(resolve)
})