/***********************************************
 * 2020.05.19
 * 
 * HTTP terminator
 * ------------------note-----------------------
 * http 통신을 끝낸다.
 ***********************************************/

const HTTPTerminator = (req, res, next)=>{
    res.end('send');
    console.log('terminate HTTP');
};

module.exports = HTTPTerminator;