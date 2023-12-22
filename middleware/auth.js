const jwt=require('jsonwebtoken');


//verifying the jwt
const verifyToken=(req,res,next)=>{

    const token= req.body.auth;

    if(!token){
        return res.status(401).json({message:"no token is provided"});
    }
    jwt.verify(token,'urlMaheshShortner',(err,decode)=>{
        if(err){
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }
        req.user=decode;
        next();
    })
}



module.exports=verifyToken;