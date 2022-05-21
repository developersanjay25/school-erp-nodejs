const mongoose = require('mongoose');

const connect = async () => {
    var db;
    try{
         db = await mongoose.connect('mongodb+srv://sanjay123:sanjay123@cluster0.4xqjv.mongodb.net/Thilash',() => {
            console.log('connected mongodb')
        });

    }
    catch(err){
        console.log(err)
    }    
    return db;
}

module.exports = connect