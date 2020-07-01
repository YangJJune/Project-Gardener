/*********************************
 * Article을 작성을 위한 Component
 * 'submit'버튼 클릭 시 'submitArticle' event를 trigger한다.
 * -------------------------------
 * note
 * html form tag와, action attribute를 적극 활용해보자
 * 
 * TODO
 * Styling
 *
 * TODO
 * Article update, delete 기능 구현
 * (update시 sha params 필요,)
 * (delete시 sha params이 필요하고, HTTP method는 DELETE)
 ********************************/

import React from 'react';
import { connect } from 'react-redux';

const submitArticle = (title, category, topic, contents) => {
  // axios({
  //     baseURL: 'https://api.github.com',
  //     url: '/repos/' + username + '/Garden/contents/' + category + '/' + title + '.md',
  //     method: 'put',
  //     headers:{
  //         Authorization: 'token ' + session.access_token
  //     },
  //     params: {
  //         message: message,
  //         content: contents
  //     }
  // });

  return {
    type: 'SUBMIT_ARTICLE',
    payload: {
      title: title,
      topic: topic,
      contents: contents,
    },
  };
};

class Writer extends React.Component {
  render() {
    return (
      <div>
        <label>Title</label>
        <input id='title_input' />
        <label>Category</label>
        <input id='category_input' />
        <label>Topic</label>
        <input id='topic_input' />
        <label>contents</label>
        <textarea id='contents_input' row='50' cols='50' />
        <button
          onClick={() =>
            this.props.submitArticle(
              document.getElementById('title_input').value,
              document.getElementById('category_input').value,
              document.getElementById('topic_input').value,
              document.getElementById('contents_input').value
            )
          }
        >
          submit
        </button>
      </div>
    )
  }
}

export default connect(null, { submitArticle })(Writer)