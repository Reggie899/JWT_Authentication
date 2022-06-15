require("dotenv").config();

// import jwt
const jwt = require("jsonwebtoken");

function refreshAuth(req, res, next) {
    const { token } = req.body;
    console.log(req.body);

  // check if token does exist
  if (token === null) return res.sendStatus(401); // no token
  // verify the refreshToken
  jwt.verify(token, process.env.REFRESH_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.user = user
    next();
  });
}


module.export = refreshAuth;  