/**********************************
# 2020.04.30
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
    secret: 'asdf',
    resave: false,
    saveUninitialized: true
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