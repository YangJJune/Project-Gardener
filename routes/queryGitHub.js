/*********************************************************
 * 2020.05.17
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
 * 
 * #중요
 * data를 session에 저장하고 있는데 이게 맞는가?
 * res.locals를 사용해야 하는가?
 * 이에 관한 공부가 필요하다.
 * 
 * 불러온 데이터가 인코딩 형식이 맞지 않다. 이에 대한 공부도 필요하다
 *********************************************************/

const router = require('express').Router();
const session = require('express-session');
const axios = require('axios');


router.use('/', 
    // check if the user is authorized or not
    // if not, go to the login page
    (req, res, next)=>{

    if(!session.user){
        // login is required
        // redirect to login page
        res.redirect('/authorization/login');
    }else{
        // user is already logged in
        // go to the next router
        next();
    };
},
    // get information from git-hub
    (req, res, next)=>{

    axios({
        baseURL: 'https://api.github.com',
        url: '/repos/' + session.user.name + '/Garden/contents' + req.path,
        method: 'get',
        headers:{
            Authorization: 'token ' + session.access_token
        }
    }).then((response)=>{
        
        // if the response is a file
        if(response.data.type === 'file'){
            session.contents = {
                type: response.data.type,
                size: response.data.size,
                name: response.data.name,
                content: response.data.content
            };
        }else{
            // if the response is a directory
            session.contents = [];

            for(index in response.data){
                session.contents[index] = {
                    type: response.data[index].type,
                    size: response.data[index].size,
                    name: response.data[index].name
                };
            };
        };
    }).catch((err)=>{
        console.log('err while requesting user information from git-hub');
    }).then(()=>{
        // request is over
        // go to the next step
        next();
    });
});

module.exports = router;