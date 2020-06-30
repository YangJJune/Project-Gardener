# Server Side Manual
  
  
# Express

## 1. Creating an article list  

request  
```http
GET /createArticleList
```  
parameter  
```JSON
{
   "option" : "Create a list by selecting only articles that match the options. 
              option is in JSON format, which can include 'author', 'category', 'topic', 'date'.
              (default: {})",
   "sort" : "Sorts the created list by 'sort'. 'sort' should be 'date', '추가예정1', or '추가예정2'.
             (default: 'date')  
             (아직 구현되지 않음)"  
}
```

response  
```javascript
{
  "list": [
      {
        // article example 1
        "id": "asdf315",
        "author": "guest",
        "category": "/study/js",
        "title": "title_sample",
        "topic": ["study", "web"],
        "date": "20000000"
      },
      {
        // article example 2
        "id": "fsdlfei5",
        "author": "guest",
        "category": "/study/javascript/express.js",
        "title": "title_sample_2",
        "topic": ["Node.js", "express.js", "study", "web"],
        "date": "20000000"
     }
  ]
}
```

## 2. Creating an article  

request  
```http
GET /createArticle
```  
parameter  
```JSON
{
   "author": "author of the Article
              (required)",
   "category": "category of the Article
               (required)",
   "title": "title of the Article
             (required)",
   "topic" "list of topic that describes the Article
            (default: [])"
}
```

response  
```JSON
{
   "date": "date the article was saved"
}
```

## 3. Updating an article  

request  
```http
GET /updateArticle
```  
parameter  
```JSON
{
   "id": "ID of the Article
          (required)",
   "topic": "list of topic that describes the Article
            (default: [])"
}
```

response  
```JSON
{
   "date": "date the article was updated"
}
```

## 4. Deleting an article 

request  
```http
GET /deleteArticle
```  
parameter  
```JSON
{
   "id" : "ID of the Article
          (required)"
}
```

response  
```JSON
{
   "date": "date the article was deleted"
}
```

# DB

## 1. Article information
```javascript
{
  // 고유 ID
  "ID": "ae12cvl3l",
  
  // 카드 최초 작성자 및 admin 
  // (해당 카드에 대한 모든 권한을 가진 사람)
  // Article의 Card(글 내용)은 'author'의 git-hub repository에 보관된다.
  "author": "guest",
  
  // Article의 블로그에서의 위치
  // git-hub repository URL의 일부이다.
  "category": "/study/javascript",
  
  // 이 Article의 제목
  "title": "some title",
  
  // Article의 키워드
  // 추천 알고리즘 등에 사용 
  "topic": ["study", "web", "personal_project"],
  
  // Article의 최종 수정 시간
  "date": "20000000"
}
```
