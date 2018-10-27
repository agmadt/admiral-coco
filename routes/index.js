const Router = require('./Router');
const router = new Router();


// controllers
const userController = require('../app/controller/UserController');
const testController = require('../app/controller/TestController');

// test route
router.get('/test', testController.index);
router.post('/test', testController.post);

module.exports = router.create();