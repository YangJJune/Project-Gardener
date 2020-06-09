/*************************************************
 * layout 중 header에 해당하는 컴포넌트
 * -----------------------------------------------
 * 미완성
 * ## 중요
 *
 * ---아직 없음---
 *************************************************/
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  appName: state.appName,
});

const Header = ({ appName }) => {
  return (
    <nav>
      <ul>
        <li>{appName}</li>
        <li>Home</li>
        <li>
          <button>search here!</button>
        </li>
        <li>Sign in</li>
      </ul>
    </nav>
  );
};

export default connect(mapStateToProps)(Header);
