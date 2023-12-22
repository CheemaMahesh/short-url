const express=require('express');
const verifyToken=require('../middleware/auth');

const router=express.Router();

const home=require('../controllers/home');
const urlController=require('../controllers/urlController')

router.get('/',home.home);
router.post('/shorten',verifyToken,urlController.shortId);
router.get('/:shortUrl',urlController.redirectUrl);
router.use('/user',require('./user'));



module.exports=router;