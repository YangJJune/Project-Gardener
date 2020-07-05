/*******************************************
 * 기본 페이지
 * URL에 따라서 글 목록을 보여주거나
 * 글을 보여주거나, 글을 작성한다.
 *******************************************/

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import Writer from './writer/Writer';
import Viewer from './viewer/Viewer';
import PostCardList from './postCardList/PostCardList';

function Home({ match }) {
  return (
    <section>
      <Header />
      <Switch>
        <Route path={match.path + 'writer'} component={Writer} />
        <Route path={match.path + 'viewer'} component={Viewer} />
        <Route path={match.path} component={PostCardList} />
      </Switch>
    </section>
  );
}

export default Home;
