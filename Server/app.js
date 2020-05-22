/*************************************************
 * 2020.05.19
 * 
 * program을 총괄하는 기본 파일
 * -------------------note-----------------------
 * session과 res.locals에 대한 공부가 필요함
 * 
 * res.send를 사용하지 않고 res.write를 사용한다.
 * 
 * 한 번의 통신에서 '*'경로가 두 번씩 호출된다.
 * express router에 관한 공부가 필요한듯 싶다.
 *************************************************/

const express = require('express');
const app = express();
const secret = require('./secret.js');

const HTTPTerminator = require('./routes/HTTPTerminator.js');
const errHandler = require('./routes/errHandler.js');

// terminate HTTP communication
app.use('*', (req, res, next)=>{
    HTTPTerminator(req, res, next);
});

// err handler
app.use('*', (err, req, res, next)=>{
    errHandler(err, req, res, next);
});

// listen
app.listen(secret.port_number, ()=>{
    console.log(`app listening on port ${secret.port_number}!`);
});