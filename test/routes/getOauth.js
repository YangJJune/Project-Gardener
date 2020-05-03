/*****************************************
* 2020.05.03
*
* express router file
*
* 로그인이 되어 있는지 확인하고,
* 로그인이 필요하다면 로그인을 진행
* (access_token을 session Storage에 저장)
******************************************/

const router = require('express').Router();
const session = require('express-session');
const axios = require('axios');
const qs = require('querystring');

// assigned by git-hub
const clientID = '70ba6f9a8f3f794fcb4c';
const clientSecret = 'c2f3928f26a250f4ec24e1c3cb54016ec3c6929f';

router.use(session({
    secret: 'git-hub API',
    name: 'test',
    cookie:{
        httpOnly: true,
        scure: false
    },
    resave: true,
    saveUninitialized: false
}));

router.use('/', (req, res, next)=>{

    if(session.access_token){ 
        // already have an access token
        // go to the next router
        next();
    }else if(req.query.code){
        // have a 'code' parameter
        // means that you have been redirected once
        // during the login process.

        // request access_token using code
        axios({
            url: '/login/oauth/access_token',
            method: 'post',
            baseURL: 'https://github.com',
            timeout: 3000,
            params:{
                client_id: clientID,
                client_secret: clientSecret,
                code: req.query.code
            },
            headers: {
                accept: 'application/json',
            }
        }).then((response)=>{
            // store access_token to session Storage
            session.access_token = response.data.access_token;

            // login process is ended
            // return to the original page
            res.redirect(req.baseUrl + req.path);
        }).catch((err)=>{
            res.send('err');
        });
    }else{
        // requires login

        // redirect to login page
        let query = qs.stringify({
            client_id: clientID,
            allow_signup: true
        });
        res.redirect('https://github.com/login/oauth/authorize?' + query);
    };
});

module.exports = router;