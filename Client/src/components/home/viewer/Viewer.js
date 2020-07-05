/****************************
 * Article contents를 보여주는 component
 * ----------------------------
 * XXX
 * redux-state 미구현으로 인한 test 불가능
 ****************************/

import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Viewer() {
  const {article, isFetching} = useSelector(state => state.selectedArticle)
  const userName = useSelector(state => state.userName.userName)
  
  function deleteArticleBtnGenerator(){
    if(userName === article.author){
      return (
        <Link to='/redirection/deleteArticle'>
          delete article
        </Link>
      )
    }
  }

  // now fetching content
  if(isFetching)
    return <h3>loading...</h3>
  else 
    return (
      <div>
        <h2>{article.title}</h2>
        <div>
          {article.author}
        </div>
        <div>
          {article.category}
        </div>
        <div>
          {article.topic}
        </div>
        <div>
          {article.content}
        </div>
        {deleteArticleBtnGenerator()}
      </div>
    )
}