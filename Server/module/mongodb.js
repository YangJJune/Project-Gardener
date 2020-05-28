/*************************************************
 * 2020.05.28
 * 
 * mongodb 관련 기능을 모아놓은 모듈
 * -----------------------------------------------
 * 내장 assert 함수를 사용하지 않고 있다.
 * 관련 공부를 하고 활용하는것이 좋아보인다.
 * const assert = require('assert');
 * 
 * 함수에서 db와 connect하는 부분이 중복이다.
 * 중복을 줄일 방법을 고민해보자
 *************************************************/

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'Project-Gardener';
const client = new MongoClient(url, {useUnifiedTopology: true});


async function createArticleList(filter) {
  await client.connect();
  
  const db = client.db(dbName);
  let list = await db.collection(Article).find(filter);

  client.close();

  return list;
};

module.exports = {
  createArticleList : createArticleList
};