import React from 'react';
import GithubIcon from "mdi-react/GithubIcon";
import './Register.scss';

function Register(){

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
    );
}

export default Register;