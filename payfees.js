const express = require('express');
const payfee = express.Router();
const addclassSchema = require('./addclassSchema');

payfee.patch('/',async (req,res) => {
    const sid = req.query.sid;
    const classname = req.query.classname;

    if(!sid || !classname){
        res.send({message : 'please fill all the fields',type :'error'})
    }

    console.log(new Date().toLocaleDateString());
    const date = new Date;
    const currentdate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`; 

    await addclassSchema.updateOne({classname ,'students.sid' : sid },{$set : {'students.$.fees': 0 , 'students.$.paymenttime' : currentdate}}).then((data) => 
    {   
        res.send({message : data,type :'success'})
    }).catch((err) => {
        res.send({message : err,type :'error'})
    })
})

module.exports = payfee