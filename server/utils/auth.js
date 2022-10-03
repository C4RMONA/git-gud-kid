const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_TIMEOUT });
    }
};