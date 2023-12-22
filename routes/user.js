const express=require('express');


const router=express.Router();

const user=require('../controllers/userController');

router.post('/signup',user.signUp);
router.get('/login',user.signIn);



module.exports=router;