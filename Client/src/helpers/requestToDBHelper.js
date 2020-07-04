/*********************************************
 * REST API Server와 관련된 helper 모음
 *
 * articleListRequestGenerator
 * createArticleRequestGenerator
 * -------------------------------------------
 * XXX
 * login scope의 적절성을 고민해봐야 함
 *********************************************/

const baseUrl = 'http://localhost:3030'

// if filter is set to null, url would be 'articles'
// otherwise, it'd be articles;
// 주석 해석이 안 되는디.... 내가 맞게 해서한거라면 삭제해야 하나? - 이산
export const articleListRequestGenerator = (filter) => (
  {
    baseURL: baseUrl,
    url: '/articles',
    method: 'get',
    params: filter,
  }
);

export const createArticleRequestGenerator = (
  {
    author, title, category, topic
  }) => (
  {
    baseURL: baseUrl,
    url: `/articles/${author}/${title}.md/${category}`,
    method: 'put',
    params:{
      topic: topic,
    },
  }
)