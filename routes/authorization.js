/*********************************************************
 * 2020.05.17
 * 
 * git-hub API login/logout 을 관리하는 router
 * (Oauth token을 사용)
 * ------------------------note----------------------------
 * log out의 경우 구현은 미룸
 * 
 * 다른 작업중에 로그인하게 되는 경우
 * 로그인 완료 후 그 작업공간에 돌아오는게 아니라
 * 그냥 홈페이지로 돌아가도록 디자인해놓은 상황
 * 추후 개선 필요
 * 
 * login scope에 대한 공부 필요
 * https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes
 * 우리는 repose 중 'Garden' respose의 접근권한만 필요하다
 * 하지만 현재 모든 권한을 가져온 상태. 수정 필요
 *********************************************************/

const router = require('express').Router();
const session = require('express-session');
const axios = require('axios');
const qs = require('querystring');

// assigned by git-hub
const clientID = '70ba6f9a8f3f794fcb4c';
const clientSecret = 'c2f3928f26a250f4ec24e1c3cb54016ec3c6929f';

// login
router.use('/login', 
    // get access token (Oauth token)
    (req, res, next)=>{

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
        }).catch((err)=>{
            console.log('err on login process');
        }).then(()=>{
            next();
        });
    }else{
        // requires 'code' parameter to get access_token
        // redirect to login page to get 'code' parameter
        res.redirect('https://github.com/login/oauth/authorize?' + qs.stringify({
            client_id: clientID,
            allow_signup: true,
            scope: 'repo'
        }));
    };
},
    // get user infromation using access token
    (req, res)=>{
        
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
    }).catch((err)=>{
        console.log("err on getting user information");
    }).then(()=>{
        // login process is over
        // go back to the main page
        res.redirect('/');
        console.log('redirect to the main page');
    });
});

// log out
// 구현 미루기로 함.

module.exports = router;