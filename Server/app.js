/*************************************************
 * 2020.05.28
 * 
 * program을 총괄하는 기본 파일
 *************************************************/

const express = require('express');
const app = express();
const db = require('./module/mongodb');
const portNum = 3000;

// for using body-parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// async function wrapper
const asyncWrapper = (fn) =>{
    return (req, res, next) =>{
        fn(req, res, next).catch((err) => next(err));
    };
};

app.get('/createArticleList', asyncWrapper(async (req, res, next)=>{
    console.log('"create article list" request received');

    let list = await db.createArticleList(req.body.option);
    // req.body.sort를 이용해 list를 정렬

    res.status(200).json({
        list: list
    });
}));

// catch 404
app.use('*', (req, res, next)=>{
    // throw 404 error
    let err = new Error('404 Occurred');
    err.status = 404;
    next(err);
});

// err handler
app.use((err, req, res, next)=>{
    // log error stack
    console.log(err.stack);

    // send error message with http status code
    res.status(err.status || 500).json({
        message: err.message
    });
});

// listen
app.listen(portNum, ()=>{
    console.log(`app listening on port ${portNum}!`);
});