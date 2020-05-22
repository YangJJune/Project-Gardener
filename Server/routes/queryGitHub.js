/*********************************************************
 * 2020.05.18
 * 
 * git-hub API를 관리하는 router
 * (Oauth token을 사용)
 * 
 * ## 중요 ##
 * 이 라우터에 있는 모든 기능은 react로 옮겨질 예정
 * >> express-session npm을 사용하지 않게 될 수도 있음
 * ------------------------note----------------------------
 * 로그인 이후 code의 노출로 redirection이 필요함
 * 
 * 불러온 데이터가 인코딩 형식이 맞지 않다.(base64) 이에 대한 공부도 필요하다
 * 
 * login scope에 대한 공부 필요
 * https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes
 * 
 * repository를 생성할 때, template을 가지고 만드는 방법이 있다고 한다.
 * https://developer.github.com/v3/repos/#create-a-repository-for-the-authenticated-user
 *********************************************************/

const router = require('express').Router();
const session = require('express-session');
const qs = require('querystring');
const axios = require('axios');
const secret = require('../secret.js');

// for using express-session
router.use(session({
    secret: secret.session_secret,
    name: 'Project-Garden',
    cookie:{
        httpOnly: true,
        scure: false
    },
    resave: true,
    saveUninitialized: false
}));

// async function wrapper
const asyncWrapper = (fn) =>{
    return (req, res, next) =>{
        fn(req, res, next).catch((err) => next(err));
    };
};

router.use('/getGardenData', asyncWrapper(async (req, res, next)=>{
    // get 'Garden' data using 'userName' and 'path'
    let response = axios({
        baseURL: 'https://api.github.com',
        url: '/repos/' + req.query.user_name + '/Garden/contents' + req.query.path,
        method: 'get',
        headers:{
            Authorization: 'token ' + session.access_token
        }
    });
    next();
}));

router.use('/getUserData', asyncWrapper(async (req, res, next)=>{
    // get the authenticated user's information
    let response = await axios({
        baseURL: 'https://api.github.com',
        url: '/user',
        method: 'get',
        headers:{
            Authorization: 'token ' + session.access_token
        }
    });

    session.user = response.data;
    next();
}));

router.use('/getReposList', asyncWrapper(async (req, res, next)=>{
    // get repos List for the authenticated user
    let response = await axios({
        baseURL: 'https://api.github.com',
        url: '/user/repos',
        method: 'get',
        headers:{
            Authorization: 'token ' + session.access_token
        }
    });
    next();
}));

router.use('/createGarden', asyncWrapper(async (req, res, next)=>{
    // creating a repository named 'Garden'
    let response = await axios({
        baseURL: 'https://api.github.com',
        url: '/user/repos',
        method: 'post',
        data:{
            name: 'Garden',
            description: 'for Project-Gardener',
            // 일단은 프라이빗으로 만들지만
            // 후에 문제 생길수도 있음
            private: true,
            // 나중에 templat repos만들려면
            // 여기서 is_template 설정 필요할 듯
            // default값이 false라고 함.....
            auto_init: true
        },
        headers:{
            Authorization: 'token ' + session.access_token
        }
    });
}));

router.use('/getAccessToken', asyncWrapper(async (req, res, next)=>{
    // get access_token (Oauth token) using 'code' parameter
    // that is requested at getAccessCode()
    let response = await axios({
        url: '/login/oauth/access_token',
        method: 'post',
        baseURL: 'https://github.com',
        params:{
            client_id: secret.client_id,
            client_secret: secret.client_secret,
            // here the 'accessCode' parameter that
            // is requested at getAccessCode() is used
            code: req.query.code
        },
        headers: {
            accept: 'application/json',
        }
    });

    session.access_token = response.data.access_token;
    res.redirect('../');
}));

router.use('/getAccessCode', (req, res)=>{
    // redirect to login page to get 'code' parameter
    res.redirect('https://github.com/login/oauth/authorize?' + qs.stringify({
        client_id: secret.client_id,
        allow_signup: true,
        scope: 'repo'
    }));
});

module.exports = router;