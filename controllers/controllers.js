// loading env to process
require("dotenv").config();


// import jsonwebtoken for authorisation
const jwt = require("jsonwebtoken");
// import postsdata set
const posts = require('../datasets/postsDataset.js')
// import generate token
const generateToken = require('../middlewares/generateToken.js')
// import access token
// const accessToken = require('../middlewares/refreshAuthorisation')

/**
 * @method: GET
 * @description: Get posts
 * @access: Private
 */

function getPosts(req, res) {
  res.json(posts.filter((post) => post.username === req.user.name)); //json makes everything json, even strings
}


/** 
 * @method: POST
 * @description: login
 * @access: Public
 */

 function login(req, res) {
  
        // 1. Authentication: e.g. 'passport js', 
        // 2. Authorisation: JWT ,
        // 3. Create a token to access apis you are authorised to
        const username = req.body.username; // Frontend/client needs to include username in request
        const user = {
          name: username,
        };
        const accessToken = generateToken(user,process.env.ACCESS_SECRET, '30s');
        const refreshToken = generateToken(user,process.env.REFRESH_SECRET, '3600s');
        res.json({
          // accessToken:accessToken
          accessToken, //being send to client here
          refreshToken
        });
}

function tokenController(req, res) {
   //check for refresh token 
   const username = req.user.name; // Frontend/client needs to include username in request
   const user = {
     name: username,
   };
const accessToken = generateToken(user, process.env.ACCESS_SECRET, '30s');
res.json({
accessToken
})
}


module.exports = {
    getPosts, login, tokenController
}