'use strict';

const express = require('express');
const Users = require('./models/users-model.js');
const auth = require('./middleware/basic.js');
const router = express.Router();


const signup = async (req, res) => {
    try {
        let record = await Users.addUser(req.body);
        res.status(201).json(record);
    } catch (error) {
        res.status(403).send('Error Creating User');
    }
};

const signin = async (req, res) => {
    try {
        res.status(200).json(req.userInfo);
    } catch (error) {
        res.status(403).send('Invalid username or password');
    }
};

router.post('/signup', signup);
router.post('/signin', auth, signin);

module.exports = router;