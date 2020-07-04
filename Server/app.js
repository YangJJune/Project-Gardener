/*************************************************
 * espress app 객체를 관리하는 file
 * HTTP request에 따른 reponse를 정의한다.
 * -----------------------------------------------
 * TODO
 * logger를 적용시켜보자
 * 
 * XXX
 * articleRouter 기능 정상작동 확인 안 함
 *************************************************/

const express = require('express')
const app = express()

// enable ALL CORS
const cors = require('cors')
app.use(cors())

const {originalUrlLogger} = require('./helper/helper')
app.use([originalUrlLogger])

// routing to article router
const { articleRouter } = require('./routes/articleRouter')
app.use('/articles', articleRouter)

// handle error
const {catch404, errHandler} = require('./helper/helper')
app.use([catch404, errHandler]);

// listen
const portNum = 3030;
app.listen(portNum, ()=>{
    console.log(`app listening on port ${portNum}!`);
});