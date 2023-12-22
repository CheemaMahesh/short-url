const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport=require('passport');
const JWTStrategy=require('./config/passport-jwt');
const PORT = 8000;

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.use(passport.initialize());

app.use('/', require('./routes'));

const CONNECT_URL = `mongodb+srv://maheshcheema:mahesh@new-url-shortner.akauzb8.mongodb.net/?retryWrites=true&w=majority`;

// URL-Shortner
mongoose.set('strictQuery',false)
mongoose.connect(CONNECT_URL).then(()=>app.listen(PORT,()=>{
    console.log(`Mongoose is connected. Server is up and running on port`,PORT);
})).catch((err)=>{
    console.error("Error in listening:", err);
})








