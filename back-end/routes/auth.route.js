const express = require('express');
const User = require('../models/user.model');
const bcryptjs = require('bcryptjs');
const { errorHandler } = require('../utils/error');
const jwt = require('jsonwebtoken');
//const { signup } = require('../controllers/auth.controller.js');
//const {signin} = require("../controllers/auth.controller.js")
const router = express.Router();

router.post("/signup",async (req, res, next) => {
    const { username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username, email, password:hashedPassword});
    try{
      await newUser.save();    //newUser is going to be save inside the database
      res.status(201).json("User created successfully");
    }
    catch(error){
        //res.status(500).json(error.message);
        //since we create the middleware, we use the it instead of this statement
        //Import the middleware from index.js
        next(errorHandler(error.message));
    }
});

router.post("/signin",async (req,res,next) =>{
    const {email,password} = req.body;
    try{
          const validUser = await User.findOne({email : email});
          if(!validUser){
            return next(errorHandler(404,'User Not Found'));
          }
          const validPassword = bcryptjs.compareSync(password,validUser.password);
          if(!validPassword){
            return next(errorHandler(401,'Wrong Credentials'));
          }
          const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)  //Create the JWT token

          const {password: hashedPW,...restInfo} = validUser._doc; // Destructuring the Valid User Information

          res.cookie('access_token',token,{httpOnly :true}).status(200).json(restInfo)  //After creating the JWT token, we need to save that token as the cookie
    }
    catch(error){
      next(error);
    }
  });

module.exports = router;