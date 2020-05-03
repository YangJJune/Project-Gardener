/*****************************************
* 2020.05.02
*
* express router file
*
* 로그인이 되어 있는지 확인하고,
* 로그인이 필요하다면 로그인을 진행
*
* https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow
* 의 step2 과정 수행 중 문제 발생
* 해당하는 URL로 POST가 되지 않음.....
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

router.use('/', (req, res)=>{

    if(session.access_token){ 
        // already have an access token
        // go to the next router
        next();
    }else if(req.query.code){
        // have a 'code' parameter
        // means that you have been redirected once
        // during the login process.
        
        // for test
        res.send(qs.stringify({
            clinet_id: clientID,
            client_secret: clientSecret,
            code: req.query.code
        }));
        
        axios({
            //url: '/login/oauth/',
            //url: '/login/oauth/' + req.query.code,
            url: '/login/oauth/?' + qs.stringify({
                clinet_id: clientID,
                client_secret: clientSecret,
                code: req.query.code
            }),
            method: 'post',
            baseURL: 'https://github.com',
            timeout: 3000,
            /*
            data:{
                clinet_id: clientID,
                client_secret: clientSecret,
                code: req.query.code
            },
            */
            headers: {
                accept: 'application/json',
            }
        }).then((response)=>{
            session.access_token = response.data.access_token;

            // for test
            res.send('test1');

            // login process is ended
            // go to the next router
            next();
        }).catch((err)=>{
            // for test
            res.send(err);
        }).then(()=>{
            // for test
            res.send('test2');
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