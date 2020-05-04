/*********************************************************
 * 2020.05.04
 * 
 * git-hub API를 관리하는 router
 * 
 * Oauth token을 이용
 * 
 * ------------------------note----------------------------
 * 로그인 과정에서 original request가 소실됨
 * session 등을 사용해 저장할 필요가 있음
 * 
 * Oauth token을 가지고 githubAPI를 사용하는데 err
 *********************************************************/

const router = require('express').Router();
const session = require('express-session');
const axios = require('axios');
const qs = require('querystring');

// assigned by git-hub
const clientID = '70ba6f9a8f3f794fcb4c';
const clientSecret = 'c2f3928f26a250f4ec24e1c3cb54016ec3c6929f';

// for using express-session
router.use(session({
    secret: 'git-hub API',
    name: 'project-garden',
    cookie:{
        httpOnly: true,
        scure: false
    },
    resave: true,
    saveUninitialized: false
}));

// check if the user is authorized or not
// if not, get authorization
router.use('/', (req, res, next)=>{

    if(session.access_token){ 
        // already have an access token
        // go to the next router
        next();
    }else if(req.query.code){
        // have a 'code' parameter
        // means that you have been redirected once
        // during the login process.

        // request access_token using 'code'parameter
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
            console.log(err);
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

// query data from git-hub using Oauth token
router.use('/', (req, res)=>{

    // 우선은 유저 정보 불러오는것부터.... 구현해둠.
    axios({
        baseURL: 'https://api.github.com',
        url: '/user/',
        method: 'get',
        timeout: 3000,
        headers:{
            Authorization: 'token ' + session.access_token
        }
    }).then((response)=>{
        // send response to client in json format
        console.log(response);
        res.json(response.data);
    }).catch((err)=>{
        console.log(err);
        res.send('err');
    });
})

module.exports = router;