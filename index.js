const express = require('express');
const bp = require("body-parser");
const connect = require('./mongodebconnect');
const app = express();
const cors = require('cors');


app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

connect();


const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions)) 

app.use('/adminlogin',require('./adminlogin'))
app.use('/getclasses',require('./getclasses'))
app.use('/addclass',require('./addclass'))
app.use('/addstudent',require('./addstudents'))
app.use('/addfees',require('./addfees'))
app.use('/getstudent',require('./findstudent'))
app.use('/payfees',require('./payfees'))

app.get('/',(req,res) => {
    res.send('You are on the server enjoy your api')
})

app.listen('5000',() => {console.log('server started on 5000')})