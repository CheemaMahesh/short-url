const mongoose=require('mongoose');


//schema for users
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default:new Date()
    },
    Urls:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Url',
    }]
});

const User=mongoose.model("User",userSchema);

module.exports=User;