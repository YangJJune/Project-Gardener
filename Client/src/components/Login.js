import React from 'react'
import GithubIcon from "mdi-react/GithubIcon";

function Login(){
    const client_id = "543812307a50747ce819";
    const redirect_url = "http://localhost:3000/";

    const loginStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    };

    const loginBox = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        width: "25%",
        height: "45%"
    };

    // 깃허브 로그인 페이지 이동.
    return(
        <div style={loginStyle}>
        <div style={loginBox}>
            <h1>Project::Gardener</h1>
        <a
        className="login-link"
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