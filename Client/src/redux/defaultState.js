/********************************
 * redux-state의 default를 정의
 ********************************/

 export const defaultState = {
    userInfo: {
        isLoggedIn: false,
        isFetching: false,
        userName: null,
        accessToken: null,
    },
    articleList: {
        isFetching: false,
        articleList: [],
    }
}