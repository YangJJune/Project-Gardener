/*******************************************
 * user의 repos에 Garden을 추가한다
 * -----------------------------------------
 * note
 * for delayed redirecion, use history not Redirect
 * 만약 Redirect 컴포넌트로 delayed redirection이 
 * 가능한 방법을 찾는다면 알려주길 바람.
 * 
 * XXX
 * 해당 page의 URL이 initialize에서 노출됨
 * 보안상의 문제가 생길 수 있음
 * 
 * XXX
 * test해본 결과.....
 * REST API가 정상 작동하지 않음
 * auth user의 repos 목록을 반환하고,
 * repos를 create하지 않음
 * https://docs.github.com/en/rest/reference/repos#create-a-repository-for-the-authenticated-user
 *******************************************/

import React, { useEffect } from 'react';
import {useSelector} from 'react-redux'
import axios from 'axios'
import { createGardenRequestGenerator } from '../../helpers/requestToGHHelper';

export default function CreateGarden({ history }) {
  const GHToken = useSelector((state) => state.GHToken.accessToken)

  const createGardenAndRdirect = async function createGardenAndRdirect(){
    // 정상 작동 안 함
    const response = (await axios(createGardenRequestGenerator(GHToken))).data
    console.log(response)
    
    history.replace('/')
  }
  
  useEffect(() => {
    createGardenAndRdirect()
  });

  return (
    <h3>creating your Garden...</h3>
  );
}