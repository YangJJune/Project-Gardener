/*********************************
 * Article을 작성을 위한 Component
 ********************************/

import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {createFileRequestGenerator} from '../../../helpers/requestToGHHelper'
import {createArticleRequestGenerator} from '../../../helpers/requestToDBHelper'
import './Writer.scss'

export default function Writer ({history}) {
  const userName = useSelector((state) => state.userName.userName)
  const accessToken = useSelector((state) => state.GHToken.accessToken)

  const [articleTitle, setArticleTitle] = useState('')
  const [articleCategory, setArticleCategory] = useState('')
  const [articleContent, setArticleContent] = useState('')

  async function writeArticleAndMove(){
    const article = {
      author: userName, 
      category: articleCategory,
      title: articleTitle,
      msg: `from Project-Garden`, 
      content: articleContent,
      accessToken: accessToken,
    }

    // create new file in Git-hub repos
    await axios(createFileRequestGenerator(article))

    // insert new article to DB (REST API Server)
    await axios(createArticleRequestGenerator(article))

    // move to main page
    history.push('/')
  }
  
  return (
    <div className="write-post">
      <label><b>Title</b></label>
      <input
        className="text-box" 
        type='text' value={articleTitle} required
        onChange={(e)=> {setArticleTitle(e.target.value)}}
      />
      <label><b>Category</b></label>
      <input
        className="text-box"  
        type='text' value={articleCategory} required 
        onChange={(e)=> {setArticleCategory(e.target.value)}}
      />
      <label><b>Content</b></label>
      <textarea
        className="textArea-box" 
        value={articleContent} required 
        onChange={(e)=> {setArticleContent(e.target.value)}}
      />
      <button onClick={writeArticleAndMove}>Save</button>
    </div>
  )
}