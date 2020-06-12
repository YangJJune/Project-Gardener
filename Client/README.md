# Client Side Manual

- scss  
  kebabcase: class, id 이름은 word마다 -(hyphen)으로 구분한다.  
  font-size는 em과 rem 단위를 사용한다.

### react and redux

- 컴포넌트는 components 폴더에 넣는다.
- components 안의 폴더는 레이아웃 이름으로 짓는다.
- 레이아웃 이름을 가진 폴더 안에는 각각 index.js가 있다. index.js에서 지켜야할 규칙을 명시하였다.
  - redux의 상태 관리를 담당한다.
  - index.js가 가지는 컴포넌트는 UI에 대한 개입을 최소화한다.
  - UI만 담당하는 다른 컴포넌트를 가져와서 render한다.
  - index.js에서 정의되는 컴포넌트 이름은 (폴더명).js이다.
- 오로지 한 레이아웃에만 쓰이는 컴포넌트들은 layout 폴더에다 넣고, 2종류 이상의 레이아웃에 쓰이는 컴포넌트들은 components 파일 안에다 넣는다.
- reducer, middleware, helper은 src 폴더 넣는다. 단 같은 종류에 속하는 것들이 많아질 경우 폴더로 묶어서 보관한다.

### react-router

- Route에 들어가는 컴포넌트는 하나만 넣도록 지향한다. 라우팅되는 컴포넌트는 pages foler에 보관한다.
- pages에 있는 컴포넌트는 여러 컴포넌트를 가져와서 반환한다.
