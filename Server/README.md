# Server Side Manual
  
  
# Express

## 1. Get an article list  

request  
```http
GET /articles/
```  
parameter  
| parameter | 의미 | type |
| --- | --- | --- |
| `filter` | article filter. `author`, `title`, `category`, `topic` field를 가질 수 있다. | JSON (default: `{}`) |

response  
| key | value | type |
| --- | --- | --- |
| `list` | article을 담은 array | array |

## 2. Create an article  

request  
```http
PUT /articles/:author/:title/:category
```  
parameter  
| parameter | 의미 | type |
| --- | --- | --- |
| `author` | 작성자의 Git-hub name | string (required) |
| `category` | Git-hub repos에서의 file path | string (required) |
| `title` | Git-hub repos에서의 file name | string (required) |
| `topic` | article의 토픽 | array (default: `[]`) |

response  
| key | value | type |
| --- | --- | --- |
| `msg` | `'successfully created'` | string |
| `result` | mongodb insertOne의 반환값 | obj |

## 3. Delete an article 

request  
```http
DELETE /articles/:id
```  
parameter  
| parameter | 의미 | type |
| --- | --- | --- |
| `id` | article id | string (required) |
  
response  
| key | value | type |
| --- | --- | --- |
| `msg` | `'successfully deleted'` | string |
| `result` | mongodb deleteOne의 반환값 | obj |

# DB

## 1. Article information
| field | description | type |
| --- | --- | --- |
| `_id` | article의 '고유' ID | Objectid |
| `author` | 작성자의 Git-hub name | string |
| `category` | Git-hub repos에서의 file path | string |
| `title` | Git-hub repos에서의 file name | string |
| `topic` | article의 토픽 | array |
