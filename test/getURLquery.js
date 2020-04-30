/**********************************
# 2020.04.30
#
# axios를 이용해 URL(URI) query를
# 받아오는 예제
#
# 받아온 쿼리는 크롬 개발자도구(단축키 F12)
# Sorces탭에서 확인하길 바람
***********************************/

// get external library(module)
const express = require('express');
const axios = require('axios');

// set program's main constant
const app = express();  // 기본 라우터
const port = 3000;

// main page
app.use('/', (req, res)=>{
    axios({
        url: 'user/repos',
        method: 'get',
        baseURL : 'https://api.github.com/',
        params :{
            visibility : 'all'
        },
        auth: {
            username: 'goldentrash',                                  // 현시점 '우이산'의 계정 사용 중
            password: '0be2a0ea28c1753b004de0847188cd6292c52c01'      //            ````
        },
        timeout: 3000,
    }).then(response =>{

        let data = '';

        for(var index in response.data){
            data += index + '번째 data{\n';
            let json = response.data[index];
            for(var property in json){
                data += '\t' + property + ': ' + json[property] + '\n';
            }
            data += '}\n';
        }

        res.send(data);

    }).catch(err=>{res.send(err)});
});

app.listen(port, () => console.log(`Server listening on port ${port}`));