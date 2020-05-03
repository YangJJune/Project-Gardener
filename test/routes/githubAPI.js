/********************************************************
 * 2020.05.03
 * 
 * access_token을 이용해 git-hub 정보를 가져오는 router
 * 
 * 현재 사용자의 요구사항과 별개로
 * 유저 정보를 출력하도록 설정해둠
 * (출력형식이 별로니 개발자도구의 source탭을 이용바람)
 ********************************************************/

const router = require('express').Router();
const session = require('express-session');
const axios = require('axios');

router.use(session({
    secret: 'git-hub API',
    name: 'test',
    cookie:{
        httpOnly: true,
        scure: false
    },
    resave: true,
    saveUninitialized: false
}))

router.use('/:category', (req, res)=>{
    // 우선은 유저 정보 불러오는것부터.... 구현해둠.
    axios({
        baseURL: 'https://api.github.com',
        url: '/user',
        method: 'get',
        timeout: 3000,
        headers:{
            Authorization: 'token ' + session.access_token
        }
    }).then((response)=>{
        let resultHtml = '';

        for(let property in response.data){
            resultHtml += property + ': ' + response.data[property] + '\n</ br>\n';
        };
        res.send(resultHtml);
    }).catch((err)=>{
        res.send('err');
    });
})

module.exports = router;