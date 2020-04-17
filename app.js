const express = require('express');
const app = express();
const port = 3000;

// basic page structure
let username = `guest`;
let content = ``;
const html = ``;

// for Git-hub APIs
//Import the axios library, to make HTTP requests
const axios = require('axios');
//This is the client ID and client secret that you obtained
//while registering the application
const clientID = '5d2f350f3429d0008893';
const clientSecret = '2a39092522d77f9b5507b49c14775348301c87c0';

// main page
app.use('/main', (req, res) => {
  // where part of html used to

  // go to login page
  if (username == `guest`) {
    const redirectionURL = `https://github.com/login/oauth/authorize?client_id=${clientID}`;
    content += `
    <div class="container-fluid">
        <form method="post" action="">
          <input type="hidden" name="redirectUrl" value="" />
          <div class="row justify-content-center"><h2>로그인</h2></div>
          <div class="row justify-content-center">
            <div class="input-group col-6 mt-2 mb-2">
              <div class="input-group-prepend">
                <span class="input-group-text">아이디</span>
              </div>
              <input class="form-control" type="loginId" id="loginId" name="loginId" placeholder="ID" />
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="input-group col-6 mt-2 mb-2">
              <div class="input-group-prepend">
                <span class="input-group-text">비밀번호</span>
              </div>
              <input class = "form-control" type="PASSWORD" id="loginPw" name="password" placeholder="password" />
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-3 text-center">
              <button type="submit" class="btn btn-primary" disabled>로그인</button>
            </div>
            <div class="col-3 text-center">
              <button type="submit" class="btn btn-secondary" disabled>회원가입</button>
            </div>  
          </div>
          <div class="row justify-content-center m-3">
            <div class="col-3 mt-3 mb-3">
              <a href="${redirectionURL}"
                class="btn btn-block btn-social btn-github">
                <i class="fa fa-github">Github으로 로그인</i>
              </a>
            </div>
          </div>
        </form>
      </div>
    `;
    res.send(content);
  } else {
    res.send(content);
    next();
  }
});

// 사용자가 git-hub로그인 버튼을 눌렀을 때,
// git-hub으로부터 redirection된 page
app.use('/login_1', (req, res) => {
  //The req.query object has the query params that were sent to this route.
  const requestToken = req.query.code;

  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    //Set the content type header, so that we get the response in JSON
    headers: {
      accept: 'application/json',
    },
  }).then((response) => {
    const accessToken = response.data.access_token;
    console.log(response.data);
    //redirect the user to the home page, along with the access token
    res.redirect(
      `/index.html?content=login_success&access_token=${accessToken}`
    );
  });
});

// /login_2에서 git-hub으로 이동한 후,
// 다시 redirection되는 page
app.use('/login_2', (req, res) => {
  //We can get the token from the "access_token" paramter of query sent by client
  //param, available in the browsers "location" global
  const token = req.query.access_token;
  console.log(token);

  //make a 'get' http request to github api to get username
  axios('https://api.github.com/user', {
    headers: {
      //Include the token in the Authorization header
      Authorization: 'token ' + token,
    },
  })
    //Axios automatically parse the response as JSON
    .then((person) => {
      //Once we get the response(which has many fields)
      //Documented here: https://developer.github.com/v3/users/#get-the-authenticated-user

      //send username nested by tag
      username = person.data.name;
      res.send(`<h4>Welcome ${username}</h4>`);
    });
});

app.use(express.static(__dirname + '/public'));
app.listen(port, () => console.log(`Server listening on port ${port}`));
