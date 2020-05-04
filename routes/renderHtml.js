/***********************************************
 * 2020.05.04
 * 
 * html을 rendering하는 router
 * 
 * ------------------note-----------------------
 * 이유를 알 수 없지만, 한 번의 page load에 두 번 호출됨
 * 
 * res.render를 사용하지 못하고 있음
 * (대신 res.sender호출 중)
 */

const router = require('express').Router();

// 이유를 알 수 없지만 한 번의 page load에 두 번 호출됨
router.use('/', (req, res, next)=>{
    console.log('can\'t implement rendering yet');
    res.send('can\'t implement rendering yet');
    
    //res.render('../public/index.html');

    // must be needed
    // because this router will be called every page
    next();
})

module.exports = router;