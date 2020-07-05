# Summary

글쓰는걸 재밌게 하기 위한 블로그

## Details

누구나 쉽게 글을 쓸 수 있도록 장려하고, 공부 등의 지속적인 글쓰기를 지원하는 블로그를 목표로 한다.  
git-hub 저장소를 이용해 글을 저장, 관리한다.  

## Environment

middleware: express  
database: mongodb  
front: react-redux  
git-hub API: REST API   

## Coding Conventions

- **push는 한 번에 여러 파일이 아닌 기능 하나당 적절한 메시지와 함께 진행한다.**  
- _(함부로 add --all 이후 push하지 않는다.)_
- 문자열은 큰따옴표가 아닌 **작은따옴표**로 작성한다. (JSON 제외)
- react component를 제외한 나머지는 Camel Case를 사용한다.

#### Comments

- file 상단에 여러 줄 주석을 작성한다.

```javascript
/*****************************
 * file에 대한 개괄적인 설명
 * 
 * helper file일 경우 export 목록을 기입한다
 * helper1
 * helper2
 * helper3
 * ...
 * ---------------------------
 * 발견된 error, 고려할 만 한 개선 사항
 * 혹은 추가적인 논의 사항 등을 기록해 둔다
 * 
 * XXX는 문제가 발생했을음 나타낸다.
 * FIXME로 수정이 필요한 부분을 명시한다.
 * TODO는 개선 사항을 의미한다.
 * note는 간단한 메모를 의미한다.
 ******************************/
```

- 함수 호출, 반복 조건문으로 인한 코드의 분기 등의 상황에서 한 줄 주석을 적극적으로 활용한다.

```javascript
// for using express built in body-parser
app.use(express.json());
```
