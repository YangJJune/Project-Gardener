/*************************************************
 * 2020.05.18
 * 
 * program을 총괄하는 기본 파일
 * -------------------note-----------------------
 * 그리고 특정 property를 삭제하고 싶음
 * -- how to multiple session
 * resave, saveUninitialized 등의 속성 공부 필요
 * 
 * if else분기구조에서 주석처리할때, 현제의 포맷은 지저분하다
 * 새로운 주석 합의가 필요하다
 * 
 * 하나의 라우터에 둘 이상의 콜백이 필요한 경우
 * 지금처럼 람다를 써야 하는가? 아니면 함수를 정의해 둬야 하는가?
 * 새로운 합의가 필요하다.
 * 
 * err handler 필요하다
 * 구조가 너무 꼬여.... 전담 router 제작 필요
 *************************************************/

const express = require("express");
const session = require("express-session");
const app = express();

const secret = require("./secret.js");

// for using express-session
app.use(session({
    secret: secret.session_secret,
    name: "Project-Garden",
    cookie:{
        httpOnly: true,
        scure: false
    },
    resave: true,
    saveUninitialized: false
}));


// login/logout with git-hub Oauth
app.use("/authorization/", require("./routes/authorization.js"));

// request data from github
app.use("/github/", require("./routes/queryGitHub.js"));

// render html using data in res.locals
app.use("/", require("./routes/sendData.js"));


// listen
app.listen(secret.port_number, ()=>{
    console.log(`app listening on port ${secret.port_number}!`);
});