


// import jwt 
const jwt = require('jsonwebtoken'); 


function generateToken(user, secret, expTime) {
    // adding expiration time 
return jwt
.sign(
    user, secret, 
{
    expiresIn: expTime
}

);
}

module.exports = generateToken;