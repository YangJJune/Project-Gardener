/*************************************************
 * layout 중 header에 해당하는 컴포넌트
 * -----------------------------------------------
 * 미완성
 * ## 중요
 *
 * anchor tag에 link url을 달지 않았다. => react router에서 합의 필요
 *************************************************/
import React from 'react';
import { connect } from 'react-redux';
import './Header.scss';
import MagnifyIcon from 'mdi-react/MagnifyIcon';

const mapStateToProps = (state) => ({
  appName: state.appName,
});

const client_id = "543812307a50747ce819";
const redirect_url = "http://localhost:3000/";

const Header = ({ appName }) => {
  return (
    <nav>
      <ul className='nav big'>
        <li className='app-name'>{appName}</li>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <label className='search-label'>Search: </label>
          <div className='search-bar'>
            <input className='search-input' type='text'></input>
            <button type='submit' className='search-button'>
              <MagnifyIcon />
            </button>
          </div>
        </li>
        <li>
          <a href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_url}`}>Sign in</a>
        </li>
      </ul>
    </nav>
  );
};

export default connect(mapStateToProps)(Header);
