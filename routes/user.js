const express=require('express');


const router=express.Router();

const user=require('../controllers/userController');

//aouth routes
//signup route
router.post('/signup',user.signUp);

//login route
router.get('/login',user.signIn);



module.exports=router;