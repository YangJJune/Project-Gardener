/*************************************************
 * 2020.05.05
 * 
 * program을 총괄하는 기본 파일
 * 
 * -------------------note-----------------------
 * app.use('/')가 두 번씩 호출되고 있음.
 * 이유는 모름.....
 * 
 * session 만료 시기 조정 필요
 * 탭을 닫으면 만료되게 하고 싶음
 * 그리고 특정 property를 삭제하고 싶음
 * 현재 10분동안 session이 일괄적으로 유지되고 있음
 *************************************************/

const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

// we will use 'ejs' engine
app.set('view engine', 'ejs');

// for using express-session
app.use(session({
    secret: 'ignorance is bliss',
    name: 'project-garden',
    cookie:{
        httpOnly: true,
        scure: false,
        maxAge: 600000
    },
    resave: true,
    saveUninitialized: false
}));


// request data from github
// and store received data in res.locals
app.use('/github/', require('./routes/queryGitHub.js'));

// render html using data in res.locals
app.use('/', require('./routes/render.js'));


// listen
app.listen(port, ()=>{
    console.log(`app listening on port ${port}!`);
    console.log(' ');
});