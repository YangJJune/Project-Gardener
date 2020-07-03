/***************************************
 * url parsing과 관련되 helper를 정의
 * 
 * toUrlParams
 **************************************/

export const toUrlParams = function toUrlParams(params){
    let result = ''
    for(let key in params){
        result += key + '=' + params[key] + '&'
    }
    return result.slice(0, -1)
}