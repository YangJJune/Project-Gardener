/*********************************
 * Article을 작성을 위한 Component
 * 'submit'버튼 클릭 시 'submitArticle' event를 trigger한다.
 * -------------------------------
 * XXX
 * 작동 했다 안 했다 반복 중...
 * 
 * TODO
 * Styling
 * 
 * TODO
 * DB(REST API SERVER)에 정보 저장
 ********************************/

import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {createFileRequestGenerator} from '../../../helpers/requestToGHHelper'
import {createArticleRequestGenerator} from '../../../helpers/requestToDBHelper'
import './Writer.scss'

export default function Writer ({history}) {
  const userName = useSelector((state) => state.userName.userName)
  const GHToken = useSelector((state) => state.GHToken.accessToken)

  const [articleTitle, setArticleTitle] = useState('')
  const [articleCategory, setArticleCategory] = useState('')
  const [articleContent, setArticleContent] = useState('')

  const writeArticleAndMove = 
    async function writeArticleAndMove(){
      const article = {
        author: userName, 
        category: articleCategory,
        title: articleTitle,
        msg: `from Project-Garden`, 
        content: articleContent,
        token: GHToken,
      }

      // create new file in Git-hub repos
      await axios(createFileRequestGenerator(article))

      // insert new article to DB (REST API Server)
      await axios(createArticleRequestGenerator(article))

      // move to main page
      history.push('/')
    }
  
  return (
    <div class="write-post">
      <label>Title</label>
      <input
        class="text-box" 
        type='text' value={articleTitle} required
        onChange={(e)=> {setArticleTitle(e.target.value)}}
      />
      <label>Category</label>
      <input
        class="text-box"  
        type='text' value={articleCategory} required 
        onChange={(e)=> {setArticleCategory(e.target.value)}}
      />
      <label>content</label>
      <textarea 
        value={articleContent} required 
        onChange={(e)=> {setArticleContent(e.target.value)}}
      />
      <button onClick={writeArticleAndMove}>Save</button>
    </div>
  )
}