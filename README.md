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

개인 연습(공부), test 등의 file도 Sample 등의 형태로 commit해서 공유하도록 하자(권장).

더 이상 필요하지 않은 file의 경우 우선 "삭제 예정" directory에 담아뒀다가 합의하에 완전 삭제 하도록 하자.

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

#### Comments

- file 상단에 여러 줄 주석을 작성한다.

```javascript
/*****************************
 * file에 대한 개괄적인 설명
 * ---------------------------
 * 발견된 error, 고려할 만 한 개선 사항
 * 혹은 추가적인 논의 사항 등을 기록해 둔다
 ******************************/
```

- 함수 호출, 반복 조건문으로 인한 코드의 분기 등의 상황에서 한 줄 주석을 적극적으로 활용한다.

```javascript
// for using express built in body-parser
app.use(express.json());
```

### client

- 컴포넌트는 components 폴더에 넣는다.
- components 안의 폴더는 레이아웃 이름으로 짓는다.
- 레이아웃 이름을 가진 폴더 안에는 각각 index.js가 있다. index.js에서 지켜야할 규칙을 명시하였다.
  - redux의 상태 관리를 담당한다.
  - index.js가 가지는 컴포넌트는 UI에 대한 개입을 최소화한다.
  - UI만 담당하는 다른 컴포넌트를 가져와서 render한다.
  - index.js에서 정의되는 컴포넌트 이름은 (폴더명).js이다.
- 오로지 한 레이아웃에만 쓰이는 컴포넌트들은 layout 폴더에다 넣고, 2종류 이상의 레이아웃에 쓰이는 컴포넌트들은 components 파일 안에다 넣는다.
- reducer, middleware, helper은 src 폴더 넣는다. 단 같은 종류에 속하는 것들이 많아질 경우 폴더로 묶어서 보관한다.
