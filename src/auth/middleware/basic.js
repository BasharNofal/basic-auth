'use strict';

const base64 = require('base-64');
const Users = require('../models/users-model.js');

module.exports = async (req, res, next) => {

    let basicHeaderParts = req.headers.authorization.split(' ');
    let encodedString = basicHeaderParts.pop();
    let decodedString = base64.decode(encodedString);
    let [username, password] = decodedString.split(':');
    const valid = await Users.checkUser({ username, password });

    if (valid) {
        req.userInfo = { user: valid };
        next();
    } else {
        next('invalid name or password');
    }

};