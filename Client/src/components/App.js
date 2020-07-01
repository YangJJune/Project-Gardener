import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Register from './Register';
import Home from './Home';
import PostCardList from './PostCardList';
import ArticleView from './ArticleView';
import Header from './Header';
import Writer from './Writer';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/write' component = {Writer} />
          <Route exact path='/register' component={Register} />
          <Route
            exact
            path='/articles'
            render={() => (
              <>
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
