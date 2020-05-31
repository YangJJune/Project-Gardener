/*************************************************
 * mongodb의 Article Collection의 CRUD를 담당하는 모듈
 * -----------------------------------------------
 * ## 중요
 * 내장 assert 함수를 사용하지 않고 있다.
 * 관련 공부를 하고 활용하는것이 좋아보인다.
 * const assert = require('assert');
 * 
 * ## 중요
 * DB에서 ID와 Date를 자동 생성하는 부분을 공부해야 한다.
 * 
 * 함수에서 db와 connect하는 부분이 중복이다.
 * 중복을 줄일 방법을 고민해보자
 *************************************************/

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'Project-Gardener';
const client = new MongoClient(url, {useUnifiedTopology: true});

// create article list using filter
async function createArticleList(filter) {
  await client.connect();
  const collection = client.db(dbName).collection(Article);

  // make list
  let list = collection.find(filter);

  client.close();
  return list;
};

// insert new article
async function insertArticle(article) {
  await client.connect();
  const collection = client.db(dbName).collection(Article);
  const now = new Date.now();

  // if the article is already exist
  if(collection.find(article)){
    let err = new Error('the article is already exist');
    err.status = 412;
    throw err;
  };

  // insert the article
  await collection.insertOne(article.date = now);
  
  client.close();
  return now;
};

// update existing article
async function updateArticle(ID, contents) {
  await client.connect();
  const collection = client.db(dbName).collection(Article);
  const now = new Date.now();

  // if the article is not exist
  if(!collection.find({"ID": ID})){
    let err = new Error('the article is not exist');
    err.status = 412;
    throw err;
  }

  // update the article that matches ID
  await collection.updateOne(
    {"ID": ID},
    {$set: contents.date = now}
  );

  client.close();
  return now;
};

// delete existing article
async function deleteArticle(ID) {
  await client.connect();
  const collection = client.db(dbName).collection(Article);
  const now = new Date.now();

  // if the article is not exist
  if(!collection.find({"ID": ID})){
    let err = new Error('the article is not exist');
    err.status = 412;
    throw err;
  }

  // delete the article that matches ID
  await collection.deleteOne({"ID": ID});

  client.close();
  return now;
};

module.exports = {
  createArticleList : createArticleList,
  insertArticle : insertArticle,
  updateArticle : updateArticle,
  deleteArticle : deleteArticle
};