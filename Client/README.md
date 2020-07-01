# Client Side Manual

## Styling : scss
- kebabcase: class, id 이름은 word마다 -(hyphen)으로 구분한다.  
- font-size는 em과 rem 단위를 사용한다.  

### Framework : react and redux
- react컴포넌트는 components 폴더에 보관한다.
  -  기능별로 폴더를 구성한다.
  -  하나의 파일에는 하나의 컴포넌트만 정의한다.
  
  
- redux폴더는 store, action, reducer를 보관한다.  
  -  action은 constants로 정의해 사용한다.
  -  연관되는 state에 맞게 reducer를 분리한다.


- react-router는 가능한 단순하게 디자인한다.
  - Route는 component를 사용하도록 한다. (render와 children사용은 자제한다.)
  - 하나의 Route는 하나의 component를 render한다.
