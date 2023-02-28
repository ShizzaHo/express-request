/* 
  СЕРВИС ДЛЯ ЗАПРОСОВ
*/

const getRequests = require('./methods/get');
const postRequests = require('./methods/post');

module.exports = {
  get: getRequests.default,
  post: postRequests.default
}
