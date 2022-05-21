const mongoose = require('mongoose');

var adminschema;

const adminschemaa = new mongoose.Schema({
    username : {type :String, required : true},
    psd : {type :String, required : true}
})

module.exports = adminschema = mongoose.model('admin',adminschemaa)