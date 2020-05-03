const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index.js');
const getOauthRouter = require('./routes/getOauth.js');
const queryToGitHubRouter = require('./routes/githubAPI.js');


//app.use('/', indexRouter);
app.use('/oauth/', getOauthRouter, queryToGitHubRouter);

app.listen(port);