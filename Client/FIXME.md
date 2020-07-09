# Client Side FIXME

- index
    - git-hub login scope의 적절성 확인 
    (현재 `scope`: `repo`)
    - 사용자에게 노출되는 Redirection page가 있음
        - initializer에서 createGarden 노출
        - viewer에서 deleteArticle 노출
- readme
    - 목차 추가
    - routing 구조 명시
    - redux state 명시
- redux
    - ducks pattern 적용
    - store.js
        - compose 활용
        - reduer에 Reducer접미 적용 여부 결정
- components
    - redirector
        - LoginGH.js
            - URL의 code가 일정시간 노출됨
- heleprs
    - requestToGHHleper.js
        - btoa의 binary string이 요구됨 (한글 불가)