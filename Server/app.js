/*************************************************
 * 2020.05.23
 * 
 * program을 총괄하는 기본 파일
 *************************************************/

// for Express (middleware)
const express = require('express');
const app = express();

// port number
const portNum = 3000;

// catch 404
app.use('*', (req, res, next)=>{
    // throw 404 error
    let err = new Error('404 Occurred');
    err.status = 404;
    next(err);
});

// err handler
app.use((err, req, res, next)=>{
    // log error stack
    console.log(err.stack);

    // send error message with http status code
    res.status(err.status || 500).json({
        message: err.message
    });
});

// listen
app.listen(portNum, ()=>{
    console.log(`app listening on port ${portNum}!`);
});