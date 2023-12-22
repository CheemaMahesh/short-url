const User=require('../model/User');
const Url=require('../model/Url');
// const jwt=require('jsonwebtoken');

const shortid=require('shortid');

//generating a short url
module.exports.shortId=async (req,res)=>{
    try{
        const exiUser= await User.findById(req.user._id);

        const shortID=shortid(8);
        
        if(exiUser){

            const newUrl=await Url.create({
                originalUrl:req.body.url,
                shortUrl:shortID,
                user:req.user._id
                });

                const shortUrl=`https://short-url-maker-new.onrender.com/${shortID}`

                exiUser.Urls.push(newUrl._id); 
                await exiUser.save();      
                return res.status(200).json({url:req.body.url, shortUrl:shortUrl});

             }else{
            return res.status(404).json({message:"user not found"});
        }

    }catch(err){
        return res.status(401).json({message:`someting went wrong in shortning url${err}`})
    }
}



//returning to origial url
module.exports.redirectUrl=async (req,res)=>{
    try{
        const shortUrl=req.params.shortUrl;
        const exiUrl=await Url.findOne({shortUrl});
            if(exiUrl){
                 res.redirect(exiUrl.originalUrl);
            }else{
                return res.status(404).json({message:"no Url found"})
            }

    }catch(err){
        return res.status(401).json({message:`someting went wrong in redirecting url${err}`})
    }
}