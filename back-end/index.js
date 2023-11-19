//import express from 'express';

const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.route.js')
const authRouter = require ('./routes/auth.route.js')
const dotenv = require('dotenv');

dotenv.config();


const app =express()
app.use(express.json());


mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log('DB is connected');
    })
    .catch((err)=>{
        console.log("Error", err);
    }) 

//Every route should be define inside the index.js

app.use('/user/routes',userRouter);  //user router is defined  (from user.route.js)

app.use('/user/auth',authRouter);   // auth router is defined


//creating the middleware
app.use((err, req, res, next) =>{

    // err = It is coming from the input of the middleware which is the error
    //we sent to the middleware
    //We use "next" to go to the next middleware

    const statusCode = err.statusCode || 500;  // whatever the status code or If there is no status code then get 500.
    const message = err.message || "Internal server error";
    return res.status(statusCode).json({
        success :false,
        statusCode:statusCode,
        message:message
    })
});
//To use this middleware, go to the auth.controller.js file and inside the catch block use next(error)
// 500 -> Internal Server Error

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});