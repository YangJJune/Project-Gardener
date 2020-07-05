/*******************************************
 * 처음 접속한 사용자에게 Garden 생성을 안내
 *******************************************/

import React from 'react'
import {Link} from 'react-router-dom'
import GithubIcon from 'mdi-react/GithubIcon'
import './Initializer.scss'

function Initializer(){
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

export default Initializer