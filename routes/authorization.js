/*********************************************************
 * 2020.05.09
 * 
 * git-hub API login/logout 을 관리하는 router
 * (Oauth token을 사용)
 * ------------------------note----------------------------
 * log out의 경우 곧 삭제 예정인 API를 사용 중
 * 추후 변경이 필요할 수 있음.
 * https://developer.github.com/v3/oauth_authorizations/#delete-an-authorization
 * ---------->> 위 API로 구현하려고 했으나 너무 내키지 않아 구현은 미룸
 *********************************************************/

const router = require('express').Router();
const session = require('express-session');
const axios = require('axios');
const qs = require('querystring');

// assigned by git-hub
const clientID = '70ba6f9a8f3f794fcb4c';
const clientSecret = 'c2f3928f26a250f4ec24e1c3cb54016ec3c6929f';

// login
router.use('/login', (req, res)=>{

    if(req.query.code){
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
                // here the 'code' parameter is used
                code: req.query.code
            },
            headers: {
                accept: 'application/json',
            }
        }).then((response)=>{
            // store access_token to session Storage
            session.access_token = response.data.access_token;

            // get user information
            axios({
                baseURL: 'https://api.github.com',
                url: '/user',
                method: 'get',
                headers:{
                    Authorization: 'token ' + session.access_token
                }
            }).then((response)=>{
        
                session.user = {
                    name: response.data.login
                };

                console.log('log in with git-hub');

                // login process is over
                // redirect to the main page
                res.redirect('/');
            }).catch((err)=>{
                console.log('err while requesting user information from git-hub');
            });
        }).catch((err)=>{
            console.log('err on login process');
        });
    }else{
        // requires 'code' parameter to get access_token
        // redirect to login page to get 'code' parameter
        res.redirect('https://github.com/login/oauth/authorize?' + qs.stringify({
            client_id: clientID,
            allow_signup: true
        }));
    };
});

// log out
// 구현 미루기로 함.

module.exports = router;