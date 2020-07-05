/*******************************************
 * user의 repos에 Garden이 있는지 확인한다.
 * 있다면 main page로 redirect하고,
 * 없다면 initialize page로 redirect한다.
 *******************************************/

import React, { useEffect } from 'react';
import {Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'
import { reposListRequestGenerator } from '../../helpers/requestToGHHelper';

export default function CheckGarden({ history }) {
  const accessToken = useSelector((state) => state.GHToken.accessToken)

  async function checkGardenAndRdirect(){
    const reposList = (await axios(reposListRequestGenerator(accessToken))).data

    if(reposList.find((repos) => (repos.name === 'Garden')))
      history.replace('/')
    else
      history.replace('/initialize')
  }
  
  useEffect(() => {
    checkGardenAndRdirect()
  })

  // if unauthorized user, don't make request
  // and redirect user to main page
  if(!accessToken)
    return <Redirect to='/' />
  else
    return <h3>checking Garden...</h3>
}