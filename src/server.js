'use strict';

const express = require('express');
const router = require('./auth/router.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');

app.post(router);
app.use('/', router);
app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
    server: app,
    start: (port) => {
        app.listen(port, () => {
            console.log('Server is running on port', port);
        });
    }
};