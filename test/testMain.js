/**********************************
# 2020.04.30
#
# express-session을 이용한 session 예제
# (작동 안 함)
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
    sess.username = req.params['username'] + 'add  ';

    res.send(`
        <a id = 'linkBtn'>
            click me!
        </a>
        <script>
            let a = document.getElementById('linkBtn');
            a.href = 'http://localhost:3000/sessionStorage.usernmae';
        </script>
    `)
})

app.listen(port, () => console.log(`Server listening on port ${port}`));