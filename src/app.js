const express = require('express');
const app = express();
const port = 3000;

//Import the axios library, to make HTTP requests
const axios = require('axios');

//This is the client ID and client secret that you obtained
//while registering the application
const clientID = '5d2f350f3429d0008893';
const clientSecret = '2a39092522d77f9b5507b49c14775348301c87c0';

//Declare the redirect route
app.get('/', (req, res) => {
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
    res.redirect(`/home.html?access_token=${accessToken}`);
  });
});

app.use(express.static(__dirname + '/public'));
console.log(__dirname);

app.listen(port, () => console.log(`Server listening on port ${port}`));