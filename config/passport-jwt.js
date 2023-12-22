const passport=require('passport');
const JWTStrategy=require('passport-jwt').Strategy;
const ExtractJWT=require('passport-jwt').ExtractJwt;


const User=require('../model/User');


const opts={
        jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey:'urlMaheshShortner'
}


passport.use(new JWTStrategy(opts,(jwtPayload,done)=>{
            User.findById(jwtPayload._id).then((user)=>{
                    if(user){
                        return done(null,user)
                    }else{
                        return done(null,false)
                    }
            }).catch((err)=>{
                return console.error("Error in jwt passport auth config",err);
            })
}))










module.exports=passport;




