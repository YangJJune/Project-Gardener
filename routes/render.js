/***********************************************
 * 2020.05.05
 * 
 * html을 rendering하는 router
 * 모든 page에 공통적으로 '마지막'에 실행되는 router
 * 
 * ------------------note-----------------------
 * 일단 ejs를 사용하고 있음
 * 
 * 두 번씩 호출되고 있음. 이유는 아직 모름.
 * 신기하게도 유효한 첫 번째 rendering을 기준으로
 * 브라우저가 작동하고 있음.
 ***********************************************/

const router = require('express').Router();
const session = require('express-session');

router.use('/', (req, res)=>{

    let user = {
        name: 'guest'
    };
    if(session.user){
        user = session.user;
    };

    res.render('../views/index', {user: user});
    console.log('rendering success');
    console.log(' ');
});

module.exports = router;