/*********************************************************
 * 2020.05.04
 * 
 * git-hub API를 관리하는 router
 * (Oauth token을 사용)
 * 
 * rendering router로 이동되야 함 (next 호출 필요)
 * ------------------------note----------------------------
 * git-hub API 추가공부 필요
 *********************************************************/

const router = require('express').Router();
const session = require('express-session');
const axios = require('axios');
const qs = require('querystring');

// assigned by git-hub
const clientID = '70ba6f9a8f3f794fcb4c';
const clientSecret = 'c2f3928f26a250f4ec24e1c3cb54016ec3c6929f';

// check if the user is authorized or not
// if not, get authorization
router.use('/', (req, res, next)=>{

    if(session.user){ 
        // already logged in
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

            // get user information
            axios({
                baseURL: 'https://api.github.com',
                url: '/user',
                method: 'get',
                headers:{
                    Authorization: 'token ' + session.access_token
                }
            }).then((response)=>{
                console.log('get user information successfully');
        
                session.user = {
                    name: response.data.login
                };

                // login process is over
                // redirect to the URL the user originally tried to access
                res.redirect(session.original_access);
                console.log('successfully logged in to git-hub');
                console.log('redirect to the URL the user originally tried to access');
                console.log(' ');
            }).catch((err)=>{
                console.log('err while requesting user information from git-hub');
            });
        }).catch((err)=>{
            console.log('err on login process');
        });
    }else{
        // requires login
        console.log('start login process');

        session.original_access = req.originalUrl;
        console.log('store original access in session');

        // redirect to login page
        res.redirect('https://github.com/login/oauth/authorize?' + qs.stringify({
            client_id: clientID,
            allow_signup: true
        }));
        console.log('redirect to git-hub login page');
    };
});

// query data from git-hub using Oauth token
router.use('/:category', (req, res, next)=>{

    // category에 따라 적절한 request 실행 예정...
});

module.exports = router;