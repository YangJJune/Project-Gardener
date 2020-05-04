/*************************************************
 * 2020.05.04
 * 
 * program을 총괄하는 기본 파일
 * 
 * -------------------note-----------------------
 * html_render_router 호출 시 err 발생
 * query_github_router내부에서 res.redirect하는 과정에서
 * HTTP Header관련 err
 * 현재 원인파악 안 됨 (html_render_router 주석처리)
 *************************************************/

const express = require('express');
const app = express();
const port = 3000;

// router for render html file
// this router calls next()
const html_render_router = require('./routes/renderHtml.js');
// router for query git-hub information
const query_github_router = require('./routes/queryGitHub.js');


//app.use('/', html_render_router);
app.use('/github/', query_github_router);


app.listen(port);