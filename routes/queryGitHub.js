/*********************************************************
 * 2020.05.04
 * 
 * git-hub API를 관리하는 router
 * (Oauth token을 사용)
 * 
 * ------------------------note----------------------------
 * git-hub API 추가공부 필요
 * 
 * git-hub에 query하는 과정이 2번 실행됨
 * (경과시간이 길어서 HTTP연결이 끊겨서 생기는 문제로 추측)
 * 
 * 이미 로그인을 거친 뒤에도 계속해서 로그인을 실행하는것으로 보임
 * session data가 너무 일찍 expire되는 것일수도 있음
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
            console.log('git-hub Oauth token is stored successfully');

            // login process is ended
            // return to the original page
            res.redirect(session.originAccess);
            console.log('redirect to original user access');

            // delete used and no more needed session data
            // session.remove(originAccess);
            session.originAccess = req.hostname;
            console.log('original URL in session storage is successfully changed to hostname');
        }).catch((err)=>{
            console.log('err on login process');
            console.log(err);
        });
    }else{
        // requires login

        // store original URI that user want to access
        session.originAccess = req.originalUrl;
        console.log('original URL is saved');

        // redirect to login page
        let query = qs.stringify({
            client_id: clientID,
            allow_signup: true
        });
        res.redirect('https://github.com/login/oauth/authorize?' + query);
        console.log('redirect to git-hub login page');
    };
});

// query data from git-hub using Oauth token
router.use('/', (req, res)=>{

    // 우선은 유저 정보 불러오는것부터.... 구현해둠.
    axios({
        baseURL: 'https://api.github.com',
        url: 'user',
        method: 'get',
        // we will authorization with Oauth token
        headers:{
            Authorization: 'token ' + session.access_token
        }
    }).then((response)=>{
        // send response to client in json format
        console.log('the response data is...');
        console.log(response.data);
    }).catch((err)=>{
        console.log('err while requesting github API');
        console.log(err);
    });
})

module.exports = router;