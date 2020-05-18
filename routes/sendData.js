/***********************************************
 * 2020.05.18
 * 
 * client에 data를 전송하는 router
 * 모든 통신의 마지막에 1번 호출되야 한다.
 * ------------------note-----------------------
 * 05.18
 * ejs 삭제함.
 ***********************************************/

const router = require('express').Router();

router.use("/", (req, res)=>{
    res.send("send");
    console.log("send data");
});

module.exports = router;