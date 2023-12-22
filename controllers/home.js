//Homepage
module.exports.home=async (req,res)=>{
    try{
        const routes={
            homePage:'https://short-url-maker-new.onrender.com/',
            signupPage:{
                url:'https://short-url-maker-new.onrender.com/user/signup',
                credentials:'username and password',
                additionalInfo:'after submiting the credentials you will get a token use it to create a short url req.body.auth',
                method:'post'
            },
            loginPage:{
                url:'https://short-url-maker-new.onrender.com/user/login',
                credentials:'username and password',
                additionalInfo:'after submiting the credentials you will get a token use it to create a short url req.body.auth',
                method:'get'
            },
            shortURLcreatingPage:{
                url:'https://short-url-maker-new.onrender.com/shorten',
                credentials:'auth and originalUrl(the url needs to be shortened)',
                additionalInfo:'after submiting the required credentials you will get two links original and shortened link.',
                method:'post'
            }

        }
       return res.status(200).json({message:"Welcome to URL SHORTNER ",user:req.user})

    }catch(err){
        return res.status(401).json({message:err})
    }
}