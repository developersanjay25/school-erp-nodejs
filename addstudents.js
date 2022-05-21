const express = require('express');
const addclassSchema = require('./addclassSchema');
const middleware = require('./middleware');
const addstudent = express.Router();

addstudent.post('/',middleware,async (req,res) => {
    var classes = await addclassSchema.findOne({classname : req.body.classname});
    
    if(!req.body.classname || !req.body.dob || !req.body.name)
    {
        res.status('500').send({message : 'Fill all the fields', type : 'error'});
    }

    if(!classes){
        res.status('500').send({message : 'class not found', type : 'error'})
    }

    if(!req.body.classname || !req.body.name || !req.body.dob){
        res.status(500).send({message : 'please Fill all the fields', type : 'error'})
    }

    await addclassSchema.updateOne({classname : req.body.classname}, { $push : {students : {sid : '00' + (classes.students.length + 1), name : req.body.name,dob : req.body.dob, fees : 0, paymenttime : ''} } });
    
    res.status(200).send({message : 'success', type : 'success',data : classes})
})

module.exports = addstudent;