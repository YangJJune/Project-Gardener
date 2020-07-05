/*************************************************
 * mongodb Article collection에 접속하는 router
 * 반드시 init()을 호출해서 
 * db에 connect하고 사용해야 한다.
 * -----------------------------------------------
 * FIXME
 * create article list에서 filter의 topic이 일치하는
 * item만 가져오게 디자인되어 있다. topic을 포함하는
 * item을 가져오도록 변경해야 한다.
 * ex) 
 * ['js']로 검색하면 ['js', 'study']는 검색되지 않는다.
 * 
 * TODO
 * article collection에 date field를 추가
 * 
 * TODO
 * update article을 추가해야 한다.
 *************************************************/

const express = require('express')
const router = express.Router()
const {asyncCallbackWrapper, catch404, errHandler} = require('../helper/helper')

// associated with mongo db
const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'Project-Gardener';
const collectionName = 'Article';
const mongo = new MongoClient(dbUrl, {useUnifiedTopology: true});

// article router initializer
router.init = 
  async function initArticleRouter(){
    // connect to mongo db
    await mongo.connect()
    console.log(`connect with ${dbUrl}`)
  }

// send article list
router.get('/', 
  asyncCallbackWrapper(async function createArticleList(req, res, next){
    const collection = mongo.db(dbName).collection(collectionName)
    const filter = (req.params.filter)?req.params.filter:{}
    const articleList = await collection.find(filter).toArray()

    res.status(200).json({
      list : articleList
    })
  })
)

// create new article
router.put('/:author/:title/:category', 
  asyncCallbackWrapper(async function createArticle(req, res, next){ 
    const collection = mongo.db(dbName).collection(collectionName)
    const article = {
      author : req.params.author,
      title : req.params.title,
      category : req.params.category,
      topic : (req.params.topic)?req.params.topic:[]
    }
    const result = await collection.insertOne(article)

    res.status(200).json({
      msg : 'successfully created',
      result : result
    })
  })
)

// delete article
router.delete('/:id',
  asyncCallbackWrapper(async function deleteArticle(req, res, next){
    const collection = mongo.db(dbName).collection(collectionName)
    const result = await collection.deleteOne({_id : req.params.id})
    
    res.status(200).json({
      msg : 'successfully deleted',
      result : result
    })
  })
)

// handle error
router.use([catch404, errHandler]);

exports.articleRouter = router