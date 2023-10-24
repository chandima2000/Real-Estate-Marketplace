//import express from 'express';

const express = require('express');
const  mongoose = require('mongoose');
const userRouter = require('./routes/user.route.js')
const authRouter = require ('./routes/auth.route.js')

const app =express()
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/Estate')
    .then(()=>{
        console.log('DB is connected');
    })
    .catch((err)=>{
        console.log("Error", err);
    })


app.use('/user/routes',userRouter);

app.use('/user/auth',authRouter);


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});