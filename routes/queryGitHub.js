/*********************************************************
 * 2020.05.18
 * 
 * git-hub API를 관리하는 router
 * (Oauth token을 사용)
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

async function getAccessToken(accessCode){
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
            code: accessCode
        },
        headers: {
            accept: 'application/json',
        }
    });

    if(response.data.access_token){
        return response.data.access_token;
    }else{
        throw new Error('no access token');
    };

};

function getAccessCode(res){
    // redirect to login page to get 'code' parameter
    res.redirect('https://github.com/login/oauth/authorize?' + qs.stringify({
        client_id: secret.client_id,
        allow_signup: true,
        scope: 'repo'
    }));
};

async function getGardenData(userName, path){
    try{
        // get 'Garden' data using 'userName' and 'path'
        let response = axios({
            baseURL: 'https://api.github.com',
            url: '/repos/' + userName + '/Garden/contents' + path,
            method: 'get',
            headers:{
                Authorization: 'token ' + session.access_token
            }
        });

        return response.data;
    }catch(err){
        throw err;
    };
};

async function getUserData(){
    // get the authenticated user's information
    let response = await axios({
        baseURL: 'https://api.github.com',
        url: '/user',
        method: 'get',
        headers:{
            Authorization: 'token ' + session.access_token
        }
    });

    if(response.data){
        return response.data;
    }else{
        throw new Error('no user data');
    };
};

async function getReposList(){
    // get repos List for the authenticated user
    let response = await axios({
        baseURL: 'https://api.github.com',
        url: '/user/repos',
        method: 'get',
        headers:{
            Authorization: 'token ' + session.access_token
        }
    });

    if(response.data){
        return response.data;
    }else{
        throw new Error('no repos list');
    };
};

async function createRepos(reposName){
    // creating a repository named 'reposName'
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

    if(response.data){
        return response.data;
    }else{
        throw new Error('err on create repos');
    }
};

// request to git-hub
router.use('/', async (req, res, next)=>{
    try{
        switch(req.query.request){
            case 'getAccessToken':
                session.access_token = await getAccessToken(req.query.code);
                console.log('get access token');
                console.log(session.access_token);
                break;
            case 'getAccessCode':
                await getAccessCode(res);
                console.log('get access code');
                break;
            case 'getGardenData':
                res.locals.garden_data = await getGardenData(req.query.user_name, req.query.path);
                res.write(res.locals.garden_data);
                console.log(res.locals.garden_data);
                break;
            case 'getUserData':
                session.user = await getUserData();
                res.write(session.user);
                console.log(session.user);
                break;
            case 'getReposList':
                res.locals.repos_list = await getReposList();
                res.write(res.locals.repos_list);
                console.log(res.locals.repos_list);
                break;
            case 'createRepos':
                await createRepos(req.query.repos_name);
                console.log('create repos');
                break;
            default:
                throw new Error('wrong request type');
        };

        // request is over
        // go to the next router
        next();
    } catch (err){
        next(err);
    };
});

module.exports = router;