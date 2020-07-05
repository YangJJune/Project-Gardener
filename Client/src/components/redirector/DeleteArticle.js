/*********************************
 * Article을 작성을 위한 Component
 * Git-hub과 DB에 file delete를 요청한다.
 ********************************/

 import React, {useEffect} from 'react'
 import {Redirect} from 'react-router-dom'
 import {useSelector} from 'react-redux'
 import axios from 'axios'

 export default function DeleteArticle({history}){
    const article = useSelector(state=> state.SelectedArticle.article)
    const userName = useSelector(state => state.userName.userName)
    const accessToken = useSelector(state => state.GHToken.accessToken)

    async function deleteArticleAndRdirect(){
        await axios()
        await axios()
        history.replace('/')
    }

    useEffect(() => {
        deleteArticleAndRdirect()
    })

    // if unauthorized user, don't make request
    // and redirect user to main page
    if(!accessToken || userName !== article.author)
        return <Redirect to='/' />
    else
        return <h3>deleting your Garden...</h3>
 }