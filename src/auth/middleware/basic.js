'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt');
const Users = require('../models/users-model.js');

module.exports = {
    encrypt: async (req, res, next) => {
        console.log('REACHED');
        try {
            const { username, password } = req.body;
            const hash = await bcrypt.hash(password, 10);
            const user = new Users({ username, password: hash });
            const record = await user.save(req.body);
            req.record = record;
            next();
        } catch (e) {
            console.log(e);
            next('Error Creating User');
            // req.error = "Error Creating User";
        };
    },

    encodeAndDecode: async (req, res, next) => {
        if (req.headers.authorization) {
            const encoded = req.headers.authorization.split(' ')[1];
            const decoded = base64.decode(encoded);
            const [username, password] = decoded.split(':');
            try {
                const user = await Users.findOne({ username: username })
                const valid = await bcrypt.compare(password, user.password);
                if (valid) {
                    req.user = username;
                    req.pass = password;
                }
                else {
                    throw new Error('Invalid User')
                }
            } catch (error) { res.status(403).send("Invalid Login"); }
            next()
        } else {
            next('No credentials were entered')
        }
    }
}
