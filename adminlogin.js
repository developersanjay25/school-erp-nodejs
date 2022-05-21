const express = require('express');
const adminloginRoute = express.Router();
const mongoose = require('mongoose');
const adminschema = require('./adminschema');
const jwt = require('jsonwebtoken');

adminloginRoute.get('/',async (req,res) => {
   
    const data = await adminschema.find({username : req.query.username});

    console.log(req.query,data);
    if(!req.query.psd || !req.query.username){
        res.send({message : 'Please fill all he fields',type : 'error' })
    }
    
    if(data[0].psd == req.query.psd)
    {
    jwt.sign({username : req.query.username} , 'secret' , {expiresIn : 3600000},(err,token) => {
        if(token){
            res.send({message : 'Log in Successfull',type : 'success' , token})
        }
        else{
            res.send({message : err,type : 'error'})
        }
    })
    }
    else{
        res.send({message : 'Wrong Creditinals',type : 'error' })
}});

module.exports = adminloginRoute