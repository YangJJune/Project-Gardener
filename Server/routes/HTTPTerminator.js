/***********************************************
 * 2020.05.19
 * 
 * HTTP terminator
 * ------------------note-----------------------
 * http 통신을 끝낸다.
 ***********************************************/

const HTTPTerminator = (req, res, next)=>{
    console.log('terminate HTTP');
    res.end('send');
};

module.exports = HTTPTerminator;