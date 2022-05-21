const express = require('express');
const addclassSchema = require('./addclassSchema');
const findstudent = express.Router();


findstudent.get('/',async (req,res) => {
    const sid = req.query.sid;
    const classname = req.query.classname;

    if(!sid){
        res.status(500).send({message : 'Please fill the sudent id',type : 'error'})
    }

   const data = await addclassSchema.findOne({classname} , {students : {$elemMatch : {sid : sid}}})
    
   console.log(data)
    if(!data.students.length){
        res.send({message : 'cant find', type : "error"})
    }

   data.students.map((item) => {
        if(item.sid){
            res.send({message : item , type :'success'})
        }
        else{
            res.send({message : 'cant find', type : "error"})
        }
   })

});

module.exports = findstudent