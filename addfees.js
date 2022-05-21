const express = require('express');
const addclassSchema = require('./addclassSchema');
const addfee = express.Router();

addfee.patch('/',async (req,res) => {
    const fees = req.query.fees;
    const classname = req.query.classname

    if(!fees || !classname){
        res.send({msg: 'please enter fees and classname',type: 'error'})
    }

    await addclassSchema.updateOne( {classname : classname },{$set: {"students.$[].fees":fees}}).then((result)=>{
        console.log(result)
        res.send({msg: 'success',type: 'success', data : result})

        }).catch((err)=>{
        console.log(err)
        res.send({msg: 'erros',type: 'error',data : err})

       })
})

module.exports = addfee;