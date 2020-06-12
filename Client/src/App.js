import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import PostCardList from './components/PostCardList';
import Header from './components/Header';
import Writer from './components/Writer';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route path='/write' component = {Writer} />
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
          <Route exact path='/header' component={Header} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
