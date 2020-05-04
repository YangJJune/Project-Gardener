/***********************************************
 * 2020.05.04
 * 
 * html을 rendering하는 router
 * 
 * ------------------note-----------------------
 * rendering을 어떤 방식으로 할지 아직 합의점 없음
 */

const router = require('express').Router();

router.use('/', (req, res, next)=>{
    console.log('run index page');

    // must be needed
    // because this router will be called every page
    next();
})

module.exports = router;