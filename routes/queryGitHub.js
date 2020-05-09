/*********************************************************
 * 2020.05.09
 * 
 * git-hub API를 관리하는 router
 * (Oauth token을 사용)
 * 
 * rendering router로 이동되야 함 (next 호출 필요)
 * ------------------------note----------------------------
 * git-hub API 추가공부 필요
 * 
 * 다른 작업중에 로그인하게 되는 경우
 * 로그인 완료 후 그 작업공간에 돌아오는게 아니라
 * 그냥 홈페이지로 돌아가도록 디자인해놓은 상황
 * 추후 개선 필요
 *********************************************************/

const router = require('express').Router();
const session = require('express-session');
const axios = require('axios');

// check if the user is authorized or not
// if not, go to the login page
router.use('/', (req, res, next)=>{

    if(!session.user){
        // login is required
        // redirect to login page
        res.redirect('/authorization/login');
    }else{
        // user is already logged in
        // go to the next router
        next();
    };
});

// request data from git-hub using API
router.use('/', (req, res, next)=>{

    // request is over
    // go to the next step
    next();
});

module.exports = router;