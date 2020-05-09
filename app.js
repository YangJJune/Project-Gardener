/*************************************************
 * 2020.05.09
 * 
 * program을 총괄하는 기본 파일
 * -------------------note-----------------------
 * session 만료 시기 조정 필요
 * 탭을 닫으면 만료되게 하고 싶음
 * 그리고 특정 property를 삭제하고 싶음
 * -- how to multiple session
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
        scure: false
    },
    // 아래 parameter 재공부 필요
    resave: true,
    saveUninitialized: false
}));


// login/logout with git-hub Oauth
app.use('/authorization/', require('./routes/authorization.js'));

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