const router = require('koa-router')();
const user = require('../controllers/user')


console.log("匹配前缀路由")
router.post('/login', user.login)
  .post('/register', user.register)
  .get('/checkOut', user.userVerify)
  .get('/query', user.query)


module.exports = router;
