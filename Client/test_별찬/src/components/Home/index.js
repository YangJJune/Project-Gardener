/*************************************************
 * 홈페이지와 관련된 모든 컴포넌트를
 * HTTP request에 따른 reponse를 정의한다.
 * -----------------------------------------------
 * createArticleList에서 list를 정렬하는 기능 구현 필요
 * ## 중요
 *
 *
 *************************************************/

import React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import MainView from './MainView';
import requestHelper from '../../helpers/requestHelper';

const mapStateToProps = (state) => ({
  appName: state.appName,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) => dispatch({ type: 'HOME_PAGE_LOADED', payload }),
});

class Home extends React.Component {
  componentDidMount() {
    this.props.onLoad(requestHelper.Articles.all());
  }
  render() {
    return (
      <div className='home-page'>
        <Banner appName={this.props.appName} />
        <div className='container page'>
          <div className='row'>
            <MainView />
            <div className='col-md-3'>
              <div className='sidebar'>
                <p>Popular Tags</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
