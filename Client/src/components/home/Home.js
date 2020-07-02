/*******************************************
 * 기본 페이지
 * URL에 따라서 글 목록을 보여주거나
 * 글을 보여주거나, 글을 작성한다.
 * -----------------------------------------
 * XXX
 * routing test를 하지 않음
 *
 * FIXME
 * Route의 path를 적절하게 변환해야 함
 *******************************************/

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './header/Header'
import Writer from './writer/Writer'
import Viewr from './viewer/Viewer'
import PostCardList from './postCardList/PostCardList'

function Home({match}) {
  return (
    <BrowserRouter basename={match.url}>
        {console.log('match')}
        {console.log(match)}
        <Header />
        <Switch>
            <Route path='/write' component={Writer} />
            <Route path='/view' component={Viewr} />
            <Route path='/' component={PostCardList} />
        </Switch>
    </BrowserRouter>
  )
}

export default Home
