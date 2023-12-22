const express=require('express');
const verifyToken=require('../middleware/auth');

const router=express.Router();

const home=require('../controllers/home');
const urlController=require('../controllers/urlController')

//home route
router.get('/',home.home);

//url shortning routes
router.post('/shorten',verifyToken,urlController.shortId);

//returning route
router.get('/:shortUrl',urlController.redirectUrl);

router.use('/user',require('./user'));



module.exports=router;