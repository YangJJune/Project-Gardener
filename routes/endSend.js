/***********************************************
 * 2020.05.18
 * 
 * res.write를 end하는 router
 * err handler가 아닌 모든 통신의 뒤에 위치해야 한다.
 * ------------------note-----------------------
 * 두 번씩 호출되고 있음...
 * >> 단순히 두 번 호출되는게 아니라
 * >> 오류 발생으로 err handling 되도
 * >> 한 번 실행되고 있음....
 ***********************************************/

const router = require('express').Router();

router.use('/', (req, res)=>{
    res.end('send');
    console.log('send data');
});

module.exports = router;