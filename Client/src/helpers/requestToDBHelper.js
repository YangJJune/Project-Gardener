/*********************************************
 * REST API Server와 관련된 helper 모음
 *
 * articleListRequestGenerator
 * createArticleRequestGenerator
 *********************************************/

const serverUrl = 'http://localhost:3030';

export const articleListRequestGenerator = (filter) => ({
  baseURL: serverUrl,
  url: '/articles',
  method: 'get',
  params: filter,
});

export const createArticleRequestGenerator = ({ 
    author, title, category, topic 
  }) => ({
    baseURL: serverUrl,
    url: `/articles/${author}/${title}/${category}`,
    method: 'put',
    params: {
      topic: topic,
    },
  }
)
