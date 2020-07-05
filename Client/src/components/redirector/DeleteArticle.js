/*********************************
 * Article을 작성을 위한 Component
 * Git-hub과 DB에 file delete를 요청한다.
 ********************************/

 import React, {useEffect} from 'react'
 import {useSelector} from 'react-redux'
 import axios from 'axios'

 export default function DeleteArticle({history}){
    const article = useSelector(state=> state.SelectedArticle.article)

    const deleteArticleAndRdirect =
        async function deleteArticleAndRdirect(){
            await axios()
            await axios()
            history.replace('/')
        }

    useEffect(() => {
        deleteArticleAndRdirect()
    })

    return (
        <h3>deleting article...</h3>
    )
 }