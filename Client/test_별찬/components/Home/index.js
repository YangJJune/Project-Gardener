import React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import MainView from './MainView';
// import Articles from '../../helpers';
import agent from '../../helpers/agent';

const mapStateToProps = (state) => ({
  appName: state.appName,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) => dispatch({ type: 'HOME_PAGE_LOADED', payload }),
});

class Home extends React.Component {
  componentDidMount() {
    this.props.onLoad(agent.Articles.all());
  }
  render() {
    console.log(`articles: ${this.props.articles} : index.js`);
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
