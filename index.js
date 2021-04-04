'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    require('./src/server.js').start(process.env.PORT);
  })
  .catch(e => console.error('Could not start server', e.message));