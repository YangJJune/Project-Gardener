/*************************************************
 * 2020.05.18
 * 
 * program을 총괄하는 기본 파일
 * -------------------note-----------------------
 * session과 res.locals에 대한 공부가 필요함
 * 
 * err handler에 대한 공부가 필요함
 * - 모듈화
 * - http status code
 *************************************************/

const express = require('express');
const session = require('express-session');
const app = express();
const secret = require('./secret.js');

// for using express-session
app.use(session({
    secret: secret.session_secret,
    name: 'Project-Garden',
    cookie:{
        httpOnly: true,
        scure: false
    },
    resave: true,
    saveUninitialized: false
}));

// request data from github
app.use('/github/', require('./routes/queryGitHub.js'));

// terminate HTTP communication
app.use('/', require('./routes/endSend.js'));

// err handler
app.use('/', (err, req, res, next)=>{
    res.send('err occurred');
    console.log(err);
});

// listen
app.listen(secret.port_number, ()=>{
    console.log(`app listening on port ${secret.port_number}!`);
});