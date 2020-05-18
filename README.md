# Summary

글쓰는걸 재밌게 하기 위한 블로그

## Details

누구나 쉽게 글을 쓸 수 있도록 장려하고, 공부 등의 지속적인 글쓰기를 지원하는 블로그를 목표로 한다.  
git-hub 저장소를 이용해 글을 저장, 관리한다.

## Environment

middleware: express  
front: react  
git-hub API: REST API v3  
process manager: PM2

## Coding Conventions

**push는 한 번에 여러 파일이 아닌 기능 하나당 적절한 메시지와 함께 진행한다.**  
_(함부로 add --all 이후 push하지 않는다.)_

문자열은 큰따옴표가 아닌 **작은따옴표**로 작성한다.  

#### Variables Naming

- 단어 사이의 구분을 \_로
  - secret
  - session
  - res.locals
  - URL query

- Camel Case
  - 일반 변수명
  - 일반 함수명
  - file name
  - directory name

## Manual

### Server Side

- /github/
  url.query를 바탕으로 git-hub에 data를 request한다.

### Client Side

- scss
  kebabcase: class, id 이름은 word마다 -(hyphen)으로 구분한다.
  font-size는 em과 rem 단위를 사용한다.
