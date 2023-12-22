//importing all required files and packages/libraries
const User=require('../model/User');
const jwt=require('jsonwebtoken');


//============SignUp controller
module.exports.signUp=async (req,res)=>{
    try{
        const existingUser= await User.findOne({username:req.body.username});
        const {username, password}=req.body;

        if(existingUser){
            return res.status(404).json({message:"user already exists"});
        }else{
            const newUser= await User.create({         
                username, password
            });
            const valid=1000*60*15;
            //creating JWT tocken
            const JwtToken=jwt.sign(newUser.toJSON(),'urlMaheshShortner',{expiresIn:valid})

            return res.status(200).json({message:"SignUp successfull, and here is your token ,use it to create short urls in req.body.auth ,it is valid upto 15 mins",user:newUser, tocken:JwtToken});
        }
    }catch(err){
        return res.status(401).json({message:err})
    }
}




//=====Login-in Controller
module.exports.signIn=async (req,res)=>{
    try{
        const {username, password}=req.body;
        const existingUser= await User.findOne({username});


        const valid=1000*60*15;

        //creating JWT tocken
        const JwtToken=jwt.sign(existingUser.toJSON(),'urlMaheshShortner',{expiresIn:valid})
        if(existingUser && existingUser.password === password){
                return res.status(200).json({message:"login successful, and here is your token ,use it to create short urls in req.body.authn,it is valid upto 15 mins",token:JwtToken,user:existingUser});       
        }else{
            return res.status(402).json({message:"email or password is incorrect"})
        }
    }catch(err){
        return res.status(401).json({message:err})
    }
}

