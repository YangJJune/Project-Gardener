/***********************************
 * 2020.05.02
 * 
 * index router
 * 
 * html template 을 전송할 예정
 ***********************************/

const router = require('express').Router();

router.use('/', (req, res)=>{
    res.sendFile('../public/index.html');

    // because it is 'index' router,
    // should consider next router
    next();
});

module.exports = router;