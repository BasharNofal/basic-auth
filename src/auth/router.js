'use strict';

const express = require('express');
const router = express.Router();
const encrypt = require('./middleware/basic.js');
const encodeAndDecode = require('./middleware/basic.js').encodeAndDecode;

router.post('/signup', encrypt, handleSignUp);
router.post('/signin', encodeAndDecode, handleSignIn);

function handleSignUp(req, res) {
    res.status(200).json(req.record);
}

function handleSignIn(req, res) {
    res.status(200).json({
        "name": req.user,
        "password": req.pass
    });
}

module.exports = router;