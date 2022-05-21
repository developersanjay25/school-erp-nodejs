const express = require('express');
const addclassSchema = require('./addclassSchema');
const middleware = require('./middleware');
const getclasses = express.Router();

getclasses.get('/',async (req,res) => {
    const data = await addclassSchema.find({});

    res.send(data);
})

module.exports = getclasses;