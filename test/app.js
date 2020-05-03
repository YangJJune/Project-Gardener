const express = require('express');
const app = express();
const port = 3000;

// router for render html file
const indexRouter = require('./routes/index.js');

// router for manage git-hub access_token
// if git-hub access_token is needed for some function,
// this router must be called before
const getOauthRouter = require('./routes/getOauth.js');

// router for query git-hub information
// need access_token
const queryToGitHubRouter = require('./routes/githubAPI.js');


//app.use('/', indexRouter);
app.use('/oauth/', getOauthRouter, queryToGitHubRouter);

app.listen(port);