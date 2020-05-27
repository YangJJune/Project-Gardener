# Summary

글쓰는걸 재밌게 하기 위한 블로그

## Details

누구나 쉽게 글을 쓸 수 있도록 장려하고, 공부 등의 지속적인 글쓰기를 지원하는 블로그를 목표로 한다.  
git-hub 저장소를 이용해 글을 저장, 관리한다.  
하나의 Article(posting)은 여러 개의 Card(file, content)의 chain이다.  

## Environment

middleware: express  
database: mongodb  
front: react  
git-hub API: REST API v3  
process manager: PM2

## Coding Conventions

**push는 한 번에 여러 파일이 아닌 기능 하나당 적절한 메시지와 함께 진행한다.**  
_(함부로 add --all 이후 push하지 않는다.)_

문자열은 큰따옴표가 아닌 **작은따옴표**로 작성한다. (JSON 제외)  

#### Variables Naming

- 단어 사이의 구분을 \_로
  - session
  - res.locals
  - URL query

- Camel Case
  - variables name  
  - function name
  - file name
  - directory name
