const express = require('express');
const { test } = require('../controllers/user.controller.js');  // add .js extension to the end of this.

const router = express.Router();

router.get('/test',test )  //see user.controller.js // content of the 'test' is in there.

module.exports =  router; 