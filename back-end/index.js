//import express from 'express';

const express = require('express');
const { default: mongoose } = require('mongoose');

const app =express()

mongoose.connect('mongodb://127.0.0.1:27017/Estate')
    .then(()=>{
        console.log('DB is connected');
    })
    .catch((err)=>{
        console.log("Error", err);
    })


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});