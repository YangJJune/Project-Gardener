/*************************************************
 * layout 중 header에 해당하는 컴포넌트
 * -----------------------------------------------
 * 미완성
 * ## 중요
 * anchor tag에 link url을 달지 않았다. => react router에서 합의 필요
 *************************************************/
import React from 'react';
import { useSelector } from 'react-redux';
import './Header.scss';
import MagnifyIcon from 'mdi-react/MagnifyIcon';


const Header = () => {
  const state = useSelector((state) => state);
  // // console.log(state);
  // const { userName, accessToken } = useSelector((state) => ({
  //   userName: state.userInfo.userName,
  //   accessToken: state.userInfo.accessToken,
  // }));

  // console.log(userName);
  // console.log(accessToken);

  

  return (
    <nav>
      <ul className='nav big'>
        <li className='app-name'>PRJ:GRDNER</li>
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
          <a href={loginUrl}>
            {/*userName || */'Sign in'}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;