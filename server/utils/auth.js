const jwt = require('jsonwebtoken');
// importing dotenv to protect JWT secret. 
require('dotenv').config();

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // "Bearer" is separated from "<tokenvalue>"
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    // if there is no token, the request object is returned as is
    if (!token) {
      return req;
    }

    try {
      // user data is decoded and attached to req
      const { data } = jwt.verify(token, process.env.JWT_SECRET, {
        maxAge: process.env.JWT_TIMEOUT,
      });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    // updated req object is returned
    return req;
  },

  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TIMEOUT,
    });
  },
};
