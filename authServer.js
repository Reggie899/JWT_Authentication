// loading environment variables - config loads the dotenv into the process
require("dotenv").config();

// import express package
const express = require("express");

// importing the router
const router = require('./routes/api/authRouter.js')

// instantiate express application
const app = express();

// use express body parser middleware
app.use(express.json());

//use the router
app.use(router);

// listen to port number: 4000
const PORT = process.env.AUTH_SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Application is connected and listening to ${PORT}`);
});
