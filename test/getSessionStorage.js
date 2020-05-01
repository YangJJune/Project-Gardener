/**********************************
# 2020.05.01
#
# express-session을 이용한 session 예제
# 
# URL 에 username 인자를 넣어 테스트 요망
***********************************/

const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

app.use(session({
    secret: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',  // session 서명에 사용 (현재 사용중인 값은 SHA-256 으로 암호화된 'test')
    name: 'test',
    cookie: {
        httpOnly: true,       // 정보를 클라이언트에서 확인할 수 없게 설정                             (default = true)
        secure: false,        // https로만 통신할지 결정                                             (default = false)
    },
    resave: true,             // session의 변화 유뮤와 별개로 session을 재설정 => race condition 위험 (default = true)
    saveUninitialized: false  // Uninitialized session도 저장                                       (default = true, but will be changed)
}))

app.use('/:username', (req, res)=>{
    let sess = req.session;
    let msg = 'err';

    if(sess.username){
        sess.username = req.params['username'];
        msg = 'change username to ' + sess.username;
    }else{
        sess.username = req.params['username'];
        msg = 'set username to ' + sess.username;
    }
    res.send(msg);
})

app.listen(port, () => console.log(`Server listening on port ${port}`));