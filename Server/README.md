# Server Side Manual
  
  
## Express

- homepage  

request  
```http
GET /
```  
response  
```JSON
{
  "data": "homepage data"
}
```
  
  
## DB

- User information  
```javascript
{
  // User 이름
  "name": "guest",  
  // git-hub access_token
  "token": "Oauth_Token",
  // 블로그 목록
  "Gardens": [  
    {
      // 블로그 이름
      "name": "garden1",  
      // 블로그 키워드
      // 추천 알고리즘 등에 사용
      "topic": [  
        "study", "javascript", "web", "es6"
      ],
      // 글 목록 (chan의 아이디어를 바탕으로, 편의상 분리된 하나의 content를 이하 '카드'라고 명명)
      "headers": [  
        // 각 글의 시작 '카드'들의 고유 ID
        "header_1_ID", "header_2_ID", "header_3_ID"  
      ]
    },
    {
      "name": "garden2",
      "topic": [
        "study", "javascript", "web", "es6"
      ],
      "headers": [
        "asdfa", "headfffse", "affsaefeagzx12", "asdfef2"
      ]
    }
  ]
}
```  
- Card information
```javascript
{
  // 카드의 고유 ID
  "id": "card_ID",
  // 카드 최초 작성자 및 admin 
  // (해당 카드에 대한 모든 권한을 가진 사람)
  // card의 content(글 내용)은 'author'의 git-hub repos에 보관된다.
  "author": "guest",
  // 공동 작업자
  // 'author'이 카드의 수정 권한을 준 사람들
  // 공동 작업자들은 카드의 content(글 내용)을 자유롭게 수정할 수 있다.
  "collaborators": [
    "friend", "teacher", "mentor"
  ],
  // 이 카드 다음으로 '연결'(link)될 '카드'의 고유 ID
  // 하나의 카드가 여러 카드의 next_card가 될 수 있다.
  // 카드의 묶음 하나가 하나의 content가 된다.
  "next_card": "some card's ID",
  // '카드'의 키워드
  // 추천 알고리즘 등에 사용 
  "topic": [
    "Node.js", "mongodb", "study", "web", "personal_project"
  ],
  // 실제 글이 저장될 git-hub의 URL
  "address" : "github.com/username/reposname/filename"
}
```
- Secret information
```javascript
{
  // express-session의 secret
  "session_secret": "asdf",
  "port_number": 0000,
  // git-hub으로부터 받은 id와 secret
  "client_id": "asdf",
  "client_secret": "asdfasdf"
}
```
