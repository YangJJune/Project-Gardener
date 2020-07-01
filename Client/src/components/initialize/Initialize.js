/*******************************************
 * 사용자가 처음 로그인 한 경우,
 * Garden을 생성하는 Page (Component)
 * -----------------------------------------
 * FIXME
 * 기능 미구현
 *******************************************/

import React from 'react'
import GithubIcon from "mdi-react/GithubIcon"
import './Initialize.scss'

function Initialize(){
    return(
      <div className="RegisterStyle">
        <div className="RegisterOutSideBox">
          <h1>처음 오셨군요!</h1>
          <a
            className="RegisterInSideBox"
            href={``}
          >
            <GithubIcon />
            <span>정원 만들기</span>
          </a>
        </div>
      </div>
    )
}

export default Initialize