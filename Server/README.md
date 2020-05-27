# Server Side Manual
  
  
## Express

### Creating an article list  

request  
```http
GET /createArticleList
```  
parameter  
```JSON
{
   "option" : "Create a list by selecting only articles that match the options. 
              option is in JSON format, which can include 'author', 'category', 'topic', 'date'.
              (default: {})"
}
```

response  
```JSON
{
  "list": [
      {
        "author": "guest",
        "category": "study/js",
        "cards": ["/uest/Garden/study/js/intro.md", "/uest/Garden/study/js/intro2.md", "/uest/Garden/study/js/intro3.md"],
        "topic": ["study", "web"],
        "date": "20000000"
      },
       {
        "author": "guest",
        "category": "study/javascript/express.js",
        "cards": ["/uest/Garden/study/javascript/express.js/readme.md"],
        "topic": ["Node.js", "express.js", "study", "web"],
        "date": "20000000"
      }
  ]
}
```

### Creating an article  

request  
```http
POST /createArticle
```  
parameter  
```JSON
{
   "author": "author of the Article
              (required)",
   "category": "category of the Article
               (required)",
   "cards": "list of cards that make up the Article
             (required)",
   "topic" "list of topic that describes the Article
            (required)"
}
```

response  
```JSON
{
   "date": "date the article was saved"
}
```

### Updating an article  

request  
```http
POST /updateArticle
```  
parameter  
```JSON
{
   "author": "author of the Article
              (required)",
   "category": "category of the Article
               (required)",
   "cards": "list of cards that make up the Article
             (required)",
   "topic" "list of topic that describes the Article
            (required)"
}
```

response  
```JSON
{
   "date": "date the article was updated"
}
```

### Deleting an article 

request  
```http
POST /deleteArticle
```  
parameter  
```JSON
{
   "author": "author of the Article
              (required)",
   "category": "category of the Article
               (required)",
   "cards": "list of cards that make up the Article
             (required)",
   "topic" "list of topic that describes the Article
            (required)"
}
```

response  
```JSON
{
   "date": "date the article was deleted"
}
```

## DB

- Article information
```javascript
{
  // 카드 최초 작성자 및 admin 
  // (해당 카드에 대한 모든 권한을 가진 사람)
  // Article의 Card(글 내용)은 'author'의 git-hub repository에 보관된다.
  "author": "guest",
  
  // Article의 블로그에서의 위치
  // git-hub repository URL의 일부이다.
  "category": "study/javascript",
  
  // 이 Article에 포함되는 Card들의 path(git-hub repository URL)
  // 연결되는 순서대로 저장된다.
  "cards": ["/uest/Garden/study/javascript/intro.md", "/uest/Garden/study/javascript/intro2.md"],
  
  // Article의 키워드
  // 추천 알고리즘 등에 사용 
  "topic": ["study", "web", "personal_project"],
  
  // Article의 최종 수정 시간
  "date": "20000000"
}
```
