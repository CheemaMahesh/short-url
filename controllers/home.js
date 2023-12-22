module.exports.home=async (req,res)=>{
    try{
       return res.status(200).json({message:"Welcome to URL SHORTNER ",user:req.user})

    }catch(err){
        return res.status(401).json({message:err})
    }
}