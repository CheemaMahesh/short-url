const mongoose=require('mongoose');


//schema for urls
const urlSchema=mongoose.Schema({
   originalUrl:{
    type:String,
    required:true
   },
   shortUrl:{
    type:String,
    requred:true
   },
   user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
   }
});

const Url=mongoose.model("Url",urlSchema);

module.exports=Url;