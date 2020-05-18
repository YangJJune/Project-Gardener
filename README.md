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
*(함부로 add --all 이후 push하지 않는다.)*  

문자열은 따옴표가 아닌 큰따옴표로 작성한다.  
file과 directory name은 camel case를 따른다.  
secret의 key는 _로 단어를 구분한다.  

## Manual

### Server Side

- /authorization/  
git-hub Oauth token과 관련된 작업을 수행한다.  

- /github/:path  
git-hub에서 path에 따라 request한다.  