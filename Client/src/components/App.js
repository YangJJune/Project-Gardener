/***************************************
 * root component
 * -------------------------------------
 * routing을 합의된 대로 변경 필요
 **************************************/

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Register from './register/Register';
import Home from './getToken/GetToken';
import PostCardList from './postCardList/PostCardList';
import ArticleView from './articleView/ArticleView';
import Header from './header/Header';
import Writer from './writer/Writer';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/write' component={Writer} />
          <Route exact path='/register' component={Register} />
          <Route
            exact
            path='/articles'
            render={() => (
              <>
                <Header />
                <PostCardList
                  posts={[
                    {
                      title: '안녕',
                      summary: ' 요약',
                      date: '날짜',
                      username: '사용자 이름',
                    },
                    {
                      title: '안녕',
                      summary: ' 요약',
                      date: '날짜',
                      username: '사용자 이름',
                    },
                    {
                      title: '안녕',
                      summary: ' 요약',
                      date: '날짜',
                      username: '사용자 이름',
                    },
                    {
                      title: '안녕',
                      summary: ' 요약',
                      date: '날짜',
                      username: '사용자 이름',
                    },
                    {
                      title: '안녕',
                      summary: ' 요약',
                      date: '날짜',
                      username: '사용자 이름',
                    },
                  ]}
                  width={5}
                />
              </>
            )}
          />
          <Route exact path='/view' component={ArticleView} />
          <Route exact path='/header' component={Header} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
