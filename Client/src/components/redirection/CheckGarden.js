/*******************************************
 * user의 repos에 Garden이 있는지 확인한다.
 * 있다면 main page로 redirect하고,
 * 없다면 initialize page로 redirect한다.
 * -----------------------------------------
 * note
 * for delayed redirecion, use history not Redirect
 * 만약 Redirect 컴포넌트로 delayed redirection이 
 * 가능한 방법을 찾는다면 알려주길 바람.
 *******************************************/

import React, { useEffect } from 'react';
import {useSelector} from 'react-redux'
import axios from 'axios'
import { checkGardenRequestGenerator } from '../../helpers/requestToGHHelper';

export default function CheckGarden({ history }) {
  const userName = useSelector((state) => state.userName.userName)
  const GHToken = useSelector((state) => state.GHToken.accessToken)

  const checkGardenAndRdirect = async function checkGardenAndRdirect(){
    let garden = null
    try{
        garden = (await axios(checkGardenRequestGenerator(userName, GHToken))).data
    }catch{
        garden = null
    }
    console.log(garden)
    if(garden)
        history.replace('/')
    else
        history.replace('/initialize')
  }
  
  useEffect(() => {
    checkGardenAndRdirect()
  });

  return (
    <h3>loading...</h3>
  );
}