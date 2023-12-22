//importing dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport=require('passport');
const JWTStrategy=require('./config/passport-jwt');
const PORT = 8000;

const app = express();

//useing middlewares for data transefer 
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//using passport middleware  for auth
app.use(passport.initialize());


//using route middleware for for routing
app.use('/', require('./routes'));


//connecting url--------> i request you to use your own data-base-rul
const CONNECT_URL = `mongodb+srv://maheshcheema:mahesh@new-url-shortner.akauzb8.mongodb.net/?retryWrites=true&w=majority`;


mongoose.set('strictQuery',false);

//connecting mongoose and staring the server
mongoose.connect(CONNECT_URL).then(()=>app.listen(PORT,()=>{
    console.log(`Mongoose is connected. Server is up and running on port`,PORT);
})).catch((err)=>{
    console.error("Error in listening:", err);
})








