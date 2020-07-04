/*******************************************
 * 사용자가 처음 로그인 한 경우,
 * Garden을 생성하는 Page (Component)
 * -----------------------------------------
 * XXX
 * Garden을 생성하는 redirection page의 
 * 링크가 노출되고 있음.
 * 보안상의 문제가 될 수 있다.
 * (사용자가 이미 Gardend을 가지고 있을 때,
 * 해당 페이지의 기능이 정의되어 있지 않음)
 * 어쩌면, 이런 이유 때문에 git-hub의
 * auth web-flow가 중간에 한 번의
 * redirection을 거칠수도 있다.
 * 
 * XXX
 * test필요
 * 작성자(이산)은 이미 Garden을 가지고 있어서
 * (삭제하고 하면 되지만) test를 하지 않음
 *******************************************/

import React from 'react'
import {Link} from 'react-router-dom'
import GithubIcon from 'mdi-react/GithubIcon'
import './Initialize.scss'

function Initialize({history}){
  return(
    <div className='RegisterStyle'>
      <div className='RegisterOutSideBox'>
        <h1>처음 오셨군요!</h1>
        <Link to='/redirection/createGarden' className='RegisterInSideBox'>
          <GithubIcon />
          <span>정원 만들기</span>
        </Link>
      </div>
    </div>
  )
}

export default Initialize