const express = require('express');
const { test } = require('../controllers/user.controller.js');  // add .js extension to the end of this.

const router = express.Router();

router.get('/test',(req, res) => {
    res.json({
      message: 'Hello this is from router'
    });
  } )  //see user.controller.js // content of the 'test' is in there.

module.exports =  router; 