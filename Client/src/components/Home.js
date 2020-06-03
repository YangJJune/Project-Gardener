import React, {useEffect} from 'react'
import axios from 'axios';
import qs from 'qs';

function Home({history, location}){
    useEffect(() => {
        async function getToken() {
          const { code } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
          });
          
          try {
            // const { access_token } = await axios.post(`https://github.com/login/oauth/access_token`, {
            //   code,
            // });

            let response = await axios({
                url: '/login/oauth/access_token',
                method: 'post',
                baseURL: 'https://cors-anywhere.herokuapp.com/github.com/',
                params:{
                    client_id: "543812307a50747ce819",
                    client_secret: "abf2475dbb515a7d50590dc42e9d5517f0cee774",
                    // here the 'accessCode' parameter that
                    // is requested at getAccessCode() is used
                    code
                },
                headers: {
                    accept: 'application/json',
                }
            });
            
            const access_token = response.data.access_token;
            console.log(access_token);
            // localStorage.setItem('access_token', access_token);
            history.push('/');
          } catch (error) {
            history.push('/error');
          }
        }
    
        getToken();
      }, [location, history]);

    return(
        <h2>access_token</h2>
    );
}

export default Home;