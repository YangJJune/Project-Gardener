const router = require('express').Router();
const session = require('express-session');
const axios = require('axios');

router.use(session({
    secret: 'git-hub API',
    name: 'test',
    cookie:{
        httpOnly: true,
        scure: false
    },
    resave: true,
    saveUninitialized: false
}))

router.use('/', (req, res)=>{
    
    res.send('test2');
})

module.exports = router;