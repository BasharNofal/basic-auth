'use strict';

// 3rd Party Resources
const express = require('express');
const router = require('./auth/router.js');
// Prepare the express app
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use('/signup',router);  
// app.get('/', (req,res)=>{
//     res.send('hello world');
// });
// app.use('/signin',router); 


module.exports = {
    server: app,
    start: (port) => {
        const PORT = port || 3003;
        app.listen(PORT, () => {
            console.log('Server is running on port', PORT);
        });
    }
};