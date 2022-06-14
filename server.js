// loading environment variables - config loads the dotenv into the process
require('dotenv').config();


// import express package
const express = require("express");


// import jsonwebtoken for authorisation 
const jwt = require('jsonwebtoken');

// instantiate express application
const app = express();

// use express body parser middleware 
app.use(express.json());

// initialise our posts dataset

const posts = [
  {
    username: "John",
    title: "Post 1",
  },
  {
    username: "Gina",
    title: "Post 2",
  },
];

// Create a simple route to get all our posts - request handler:
app.get("/posts", (req, res) => {
    res.json(posts); //json makes everything json, even strings
});

// Create a login route
app.post('/login', (req, res) => {
    // Authentication: e.g. 'passport js'
    //Authorisation: JWT , 
    // Create a token to access apis you are authorised to
    const username = req.body.username; // Frontend/client needs to include username in request 
    const user = {
        name: username
    }; 
const accessToken = jwt.sign(user, process.env.ACCESS_SECRET);
res.json({
   // accessToken:accessToken
   accessToken
})
})

// listen to port number: 3000
const PORT = process.env.SERVER_PORT;
app.listen(
    PORT, 
    () => {
  console.log(`Application is connected and listening to ${PORT}`
  );
}
);
