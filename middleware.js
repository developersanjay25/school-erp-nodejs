const jwt = require('jsonwebtoken');

module.exports = async function(req,res,next) {
        const tokendata = req.headers.authorization;
        console.log(req.headers)
        if(!tokendata){
            res.status(401).send({message : 'token not valid', type : 'error'})
        }
        console.log(tokendata.split(' ')[1])
        try{
        await jwt.verify(tokendata.split(' ')[1],'secret');
        next();
        }
        catch(err){
            res.status(401).send({message : 'token not valid', type : 'error',data : err})
        }
}  