import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-light'>
        <div className='container'>
          <a className='navbar-brand'>{this.props.appName.toLowerCase()}</a>
        </div>
      </nav>
    );
  }
}

export default Header;
