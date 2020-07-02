/*************************************************
 * mongodb Article collection에 접속하는 router
 * -----------------------------------------------
 * note
 * 내장 assert 함수를 사용하지 않고 있다.
 * 관련 공부를 하고 활용하는것이 좋아보인다.
 * const assert = require('assert')
 * 
 * note
 * DB에서 ID와 Date를 자동 생성하는 부분을 공부해야 한다.
 * 
 * FIXME
 * create article list에서 filter의 topic이 일치하는
 * item만 가져오게 디자인되어 있다. topic을 포함하는
 * item을 가져오도록 변경해야 한다.
 * ex) 
 * ['js']로 검색하면 ['js', 'study']는 검색되지 않는다.
 * 
 * TODO
 * article collection에 date field를 추가해야 한다.
 * update시 $currentDate의 값이 js Date.now()와 
 * 같은 format인지 확인할 수 없어 추가하지 않았다.
 * 
 * TODO
 * update article을 추가해야 한다.
 * 
 * XXX
 * 사용자 인증을 거치지 않음
 *************************************************/

const express = require('express')
const router = express.Router()
const {asyncCallbackWrapper, catch404, errHandler} = require('../helper/helper')

// associated with mongo db
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'Project-Gardener';
const client = new MongoClient(url, {useUnifiedTopology: true});

// send article list
router.get('/', 
  asyncCallbackWrapper(async function createArticleList(req, res, next){
    await client.connect()
    const collection = client.db(dbName).collection(Article)
    const filter = req.params.filter
    let list = collection.find(filter)

    res.status(200).json({
      list : list
    }) 
    client.close()
  })
)

// create new article
router.put('/:author/:title/:category', 
  asyncCallbackWrapper(async function createArticle(req, res, next){ 
    await client.connect() 
    const collection = client.db(dbName).collection(Article)
    const article = {
      author : req.params.author,
      title : req.params.title,
      category : req.params.category,
      topic : (req.params.topic)?req.params.topic:[]
    }
    let result = await collection.insertOne(article)

    res.status(200).json({
      msg : 'successfully created',
      result : result
    }) 
    client.close()
  })
)

// delete article
router.delete('/:id',
  asyncCallbackWrapper(async function deleteArticle(req, res, next){
    await client.connect()
    const collection = client.db(dbName).collection(Article)
    let result = await collection.deleteOne({_id : req.params.id})
    
    res.status(200).json({
      msg : 'successfully deleted',
      result : result
    })
    client.close()
  })
)

// handle error
router.use([catch404, errHandler]);

exports.articleRouter = router