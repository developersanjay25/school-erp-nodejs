const { type } = require('express/lib/response');
const mongoose = require('mongoose');

var addclassschema;

const addclass = mongoose.Schema({
    classname : {type : String, required : true},
    students : [{type : Object}]
}) 

module.exports = addclassschema = mongoose.model('classes',addclass);