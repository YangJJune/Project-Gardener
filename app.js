const express = require('express');
const app = express();
const port = 3000;

// basic page structure
let username = `guest`;
let content =``;
const html = `
<!doctype html>
<html lang="ko">
  <head>
    <title>Project : Gardener</title>
    <meta charset ="utf-8">
    <meta name="viewport" content="width=device-width, shrink-to-fit=no">

    <!-- Bootsrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  </head>
  <body>
    <header class="navbar navbar-expand-lg navbar-light bg-light row justify-content-center">
      <a href="/" class ="navbar-brand badge badge-light col"><h4>Project : Gardener</h4></a>
      <nav class="col-10">
        <ul class="navbar-nav">
          <li class="nav-item input-group">
            <input type="text" class="form-control" placeholder="Search anything~!">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">search</button>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">World</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Garden</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">${username}</a>
          </li>
        </ul>
      </nav>
    </header>

    <section class="carousel slide" data-ride="carousel">
      ${content}
    </section>

    <footer class="fixed-bottom badge badge-light">
      team Phoenix's Project : Gardener
    </footer>
  </body>

  <!-- for Bootstrap js -->
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</html>
`;

// for Git-hub APIs
//Import the axios library, to make HTTP requests
const axios = require('axios');
//This is the client ID and client secret that you obtained
//while registering the application
const clientID = '5d2f350f3429d0008893';
const clientSecret = '2a39092522d77f9b5507b49c14775348301c87c0';

// main page
app.use("/", (req, res)=>{
  content = ``;

  // go to login page
  if(username == `guest`){
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
    res.send(html);
  }else{
    res.send(html);
    next();
  }
})

// 사용자가 git-hub로그인 버튼을 눌렀을 때,
// git-hub으로부터 redirection된 page
app.use("/login_1", (req, res)=>{
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
    res.redirect(`/src/index.html?access_token=${accessToken}`);
  });
})

// /login_2에서 git-hub으로 이동한 후,
// 다시 redirection되는 page
app.use("/login_2", (req, res)=>{
  //We can get the token from the "access_token" query
  //param, available in the browsers "location" global
  const query = window.location.search.substring(1);
  const token = query.split('access_token=')[1];

  //Call the user info API using the fetch browser library
  fetch('https://api.github.com/user', {
    headers: {
      //Include the token in the Authorization header
      Authorization: 'token ' + token,
    },
  })
    //Parse the response as JSON
    .then((res) => res.json())
    .then((res) => {
      //Once we get the respone(which has many fields)
      //Documented here: https://developer.github.com/v3/users/#get-the-authenticated-user

      // set profile name
      username = res.name;
    });
})

app.use(express.static(__dirname + '/public'));
app.listen(port, () => console.log(`Server listening on port ${port}`));