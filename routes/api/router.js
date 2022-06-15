const express = require("express");

//importing middleware
const authoriseToken = require('../../middlewares/accessAuthorization.js')

// importing controllers
const getPosts = require("../../controllers/controllers.js").getPosts;

const router = express.Router(); 


 router.get("/posts", authoriseToken, getPosts); //authoriseToken = middleware


 module.exports = router; 