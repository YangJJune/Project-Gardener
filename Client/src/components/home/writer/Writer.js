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

import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {createFileRequestGenerator} from '../../../helpers/requestToGHHelper'

export default function Writer ({history}) {
  const userName = useSelector((state) => state.userName.userName)
  const GHToken = useSelector((state) => state.GHToken.GHToken)

  const [articleTitle, setArticleTitle] = useState('')
  const [articleCategory, setArticleCategory] = useState('')
  const [articleContent, setArticleContent] = useState('')

  const writeArticleAndMove = 
    async function writeArticleAndMove(){
      // create new file in Git-hub rpos
      await axios(createFileRequestGenerator({
        userName: userName, 
        path: articleCategory, 
        msg: 'from Project-Garden', 
        content: articleContent,
        token: GHToken,
      }))

      // insert new article to DB (REST API Server)
      // await axios()

      // move to main page
      history.push('/')
    }
  
  return (
    <div>
      <label>Title</label>
      <input 
        type='text' value={articleTitle} required
        onChange={(e)=> {setArticleTitle(e.target.value)}}
      />
      <label>Category</label>
      <input 
        type='text' value={articleCategory} required 
        onChange={(e)=> {setArticleCategory(e.target.value)}}
      />
      <label>content</label>
      <textarea 
        value={articleContent} row='50' cols='50' required 
        onChange={(e)=> {setArticleContent(e.target.value)}}
      />
      <button onClick={writeArticleAndMove}>Save</button>
    </div>
  )
}