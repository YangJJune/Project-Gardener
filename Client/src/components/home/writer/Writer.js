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

class Writer extends React.Component {
  render() {
    return (
      <div>
        <label for='title'>Title</label>
        <input id='title' name='title' />
        <label for='category'>Category</label>
        <input id='category' name='category' />
        <label for='content'>content</label>
        <textarea id='content' row='50' cols='50' />
        <input type='submit' value='Save' />
      </div>
    )
  }
}

export default connect(null, { submitArticle })(Writer)