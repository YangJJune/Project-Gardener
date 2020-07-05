/*******************************************
 * user의 repos에 Garden을 추가한다
 *******************************************/

import React, { useEffect } from 'react';
import {Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'
import { createGardenRequestGenerator } from '../../helpers/requestToGHHelper';

export default function CreateGarden({ history }) {
  const accessToken = useSelector((state) => state.GHToken.accessToken)

  const createGardenAndRdirect = async function createGardenAndRdirect(){
    await axios(createGardenRequestGenerator(accessToken))
    history.replace('/')
  }
  
  useEffect(() => {
    createGardenAndRdirect()
  })

  // if unauthorized user, don't make request
  // and redirect user to main page
  if(!accessToken)
    return <Redirect to='/' />
  else
    return <h3>creating your Garden...</h3>
}