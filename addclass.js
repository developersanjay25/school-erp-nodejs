const express = require('express');
const addclass = express.Router();
const addclassschema = require('./addclassSchema');
const middleware = require('./middleware');


addclass.post('/',middleware,async (req,res) => {
    var classdata = await addclassschema.findOne({classname : req.body.classname});

    console.log(classdata)

    if(classdata){
        res.send({message : 'class name already exits', type : 'error'})
    }
    else{
        await new addclassschema({classname : req.body.classname}).save();
    }
        
    res.status(200).send({message : 'class added success fully', type : 'success'});
})

module.exports = addclass;