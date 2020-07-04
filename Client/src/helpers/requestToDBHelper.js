/*********************************************
 * REST API Server와 관련된 helper 모음
 *
 * generateArticleListRequest
 * -------------------------------------------
 * XXX
 * login scope의 적절성을 고민해봐야 함
 *********************************************/

// if filter is set to null, url would be 'articles'
// otherwise, it'd be articles;
// 주석 해석이 안 되는디.... 내가 맞게 해서한거라면 삭제해야 하나? - 이산
export const generateArticleListRequest = (filter) => ({
  baseURL: 'http://localhost:3000',
  url: '/articles',
  method: 'get',
  params: filter,
});
