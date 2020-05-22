/***********************************************
 * 2020.05.19
 * 
 * error handler
 * ------------------note-----------------------
 * http statusCode에 대한 공부가 필요하다.
 ***********************************************/

const errHandler = (err, req, res, next)=>{
    console.log(err);
    res.end('err occurred');
};

module.exports = errHandler;