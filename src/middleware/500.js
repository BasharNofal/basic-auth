'use strict';

module.exports = (err,req,res,next) => {
    const error = err.message ? err.message:err;
    res.status(500);
    res.statusMessage = 'Server error';
    res.json({error});
};