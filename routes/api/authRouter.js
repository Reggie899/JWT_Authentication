const express = require("express");

const login = require("../../controllers/controllers.js").login;
const tokenController = require('../../controllers/controllers.js').tokenController;
const refreshAuth = require('../../middlewares/refreshAuthorisation');

const router = express.Router(); 

 router.post("/login", login);
 router.post('/token', refreshAuth, tokenController)

 module.exports = router; 