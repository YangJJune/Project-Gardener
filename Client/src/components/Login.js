import React from 'react';
import GithubIcon from "mdi-react/GithubIcon";
import './Login.scss';

function Login(){
    const client_id = "543812307a50747ce819";
    const redirect_url = "http://localhost:3000/";

    // 깃허브 로그인 페이지 이동.
    return(
        <div className="loginStyle">
        <div className="loginOutSideBox">
            <h1>Project::Gardener</h1>
        <a
        className="loginInSideBox"
        href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_url}`}
      >
        <GithubIcon />
        <span>Login with GitHub</span>
      </a>
      </div>
      </div>
    );
}

export default Login;