/*************************************************
 * 2020.05.04
 * 
 * program을 총괄하는 기본 파일
 * 
 * -------------------note-----------------------
 * app.listen과 http.response에 대한 공부 필요
 * 
 * 현재 클라이언트에 전송되는 data는 없음
 * 모두 console에 출력되기만 함.
 *************************************************/

const express = require('express');
const app = express();
const port = 3000;

// router for render html file
// this router calls next()
const html_render_router = require('./routes/renderHtml.js');
// router for query git-hub information
const query_github_router = require('./routes/queryGitHub.js');


app.use('/', html_render_router);
app.use('/github/', query_github_router);

app.listen(port);