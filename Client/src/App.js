import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import PostCardList from './components/PostCardList';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route
            exact
            path='/articles'
            render={() => (
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
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
