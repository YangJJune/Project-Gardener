/********************************************
 * 자주 쓰는 기능들 구현
 * 
 * 404 catcher
 * err handler
 * async callback wrapper
 ********************************************/

// 404 error catcher
exports.catch404 = function catch404(req, res, next){
    // throw 404 error
    let err = new Error('404 Occurred');
    err.status = 404;
    next(err);
}

// error handler
exports.errHandler = function errHandler(err, req, res, next){
    // log error stack
    console.log('an error catched')
    console.log(err.stack);

    // send error message with http status code
    res.status(err.status || 500).json({
        message: err.message
    })
}

// async callback wrapper
exports.asyncCallbackWrapper = function asyncCallbackWrapper(callback){
    return (req, res, next) =>{
        callback(req, res, next)
            .catch((err) => {
                next(err)
            })
    };
};