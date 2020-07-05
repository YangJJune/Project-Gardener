/*******************************************
 * 기본 페이지
 * URL에 따라서 글 목록을 보여주거나
 * 글을 보여주거나, 글을 작성한다.
 *******************************************/

<<<<<<< HEAD
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './header/Header'
import Writer from './writer/Writer'
import Viewer from './viewer/Viewer'
import PostCardList from './postCardList/PostCardList'
=======
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import Writer from './writer/Writer';
import Viewer from './viewer/Viewer';
import PostCardList from './postCardList/PostCardList';
>>>>>>> f6c30cadf9dfe6139abb019343d270af5c135660

function Home({ match }) {
  return (
<<<<<<< HEAD
    <BrowserRouter basename={match.url}>
        <Header />
        <Switch>
            <Route path='/write' component={Writer} />
            <Route path='/view' component={Viewer} />
            <Route path='/' component={PostCardList} />
        </Switch>
    </BrowserRouter>
  )
=======
    <section>
      <Header />
      <Switch>
        <Route path={match.path + 'writer'} component={Writer} />
        <Route path={match.path + 'viewer'} component={Viewer} />
        <Route path={match.path} component={PostCardList} />
      </Switch>
    </section>
  );
>>>>>>> f6c30cadf9dfe6139abb019343d270af5c135660
}

export default Home;
