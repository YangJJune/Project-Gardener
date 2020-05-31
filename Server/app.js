/*************************************************
 * espress app 객체를 관리하는 file
 * HTTP request에 따른 reponse를 정의한다.
 * -----------------------------------------------
 * createArticleList에서 list를 정렬하는 기능 구현 필요
 * ## 중요
 * 
 * db CRUD 기능 정상작동 확인 안 함
 *************************************************/

const express = require('express');
const app = express();
const articleCRUD = require('./module/articleCRUD');
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

// create article list from db
app.get('/createArticleList', asyncWrapper(async (req, res, next)=>{
    console.log('"create article list" request received');

    let list = await articleCRUD.createArticleList(req.body.option);
    // req.body.sort를 이용해 list를 정렬

    res.status(200).json({
        list: list
    });
}));

// insert article to db
app.post('/createArticle', asyncWrapper(async (req, res, next)=>{
    console.log('"create article" request received');

    let article = {
        author = req.body.author,
        category = req.body.category,
        cards = (req.body.cards)?req.body.card:[],
        topic = (req.body.topic)?req.body.topic:[]
    };

    let date = await articleCRUD.insertArticle(article);

    res.status(200).json({
        date: date
    });
}));

// update article to db
app.post('/updateArticle', asyncWrapper(async (req, res, next)=>{
    console.log('"update article" request received');

    let contents = {
        cards = (req.body.cards)?req.body.card:[],
        topic = (req.body.topic)?req.body.topic:[]
    };

    let date = await articleCRUD.createArticle(req.body.id, contents);

    res.status(200).json({
        date: date
    });
}));

// delete article from db
app.post('/updateArticle', asyncWrapper(async (req, res, next)=>{
    console.log('"delete article" request received');

    let date = await articleCRUD.deleteArticle(req.body.id);

    res.status(200).json({
        date: date
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