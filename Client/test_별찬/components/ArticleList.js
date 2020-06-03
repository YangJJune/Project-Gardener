import React from 'react';

const ArticleList = (props) => {
  console.log(`articles: ${props.articles} : ArticleList.js`);
  if (!props.articles) {
    return <div className='article-preview'>Loading...</div>;
  }

  if (props.articles.length === 0) {
    return <div className='article-preview'>No articles are here... yet.</div>;
  }

  return (
    <div>
      {props.articles.map((article) => (
        <h2>{article.title}</h2>
      ))}
    </div>
  );
};

export default ArticleList;
