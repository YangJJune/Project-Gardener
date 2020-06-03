import React from 'react'
import GithubIcon from "mdi-react/GithubIcon";

function Login(){
    const client_id = "543812307a50747ce819";
    const redirect_uri = "http://localhost:3000/login";

    // 깃허브 로그인 페이지 이동.
    return(
        <a
        className="login-link"
        href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
      >
        <GithubIcon />
        <span>Login with GitHub</span>
      </a>
    );
}

export default Login;