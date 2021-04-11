'use strict';

require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true , useUnifiedTopology: true }).then(()=>{
    
  require('./src/server').start(process.env.PORT);
})
.catch((err)=>{
    console.log('An error occurred while connecting to database',err);
})
