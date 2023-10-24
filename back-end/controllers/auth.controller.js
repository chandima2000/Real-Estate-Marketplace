const User = require('../models/user.model');
const bcryptjs = require('bcryptjs');
//we get the information from the browser and this is coming from the body

module.exports = {
    signup:async (req, res, next) => {
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
              next(error);
          }
    }
  };