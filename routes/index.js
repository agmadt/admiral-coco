const Router = require('./Router');
const router = new Router();

// controllers
const testController = require('../app/controller/TestController');
const userController = require('../app/controller/UserController');

// test route
router.get('/test', testController.index);
router.post('/test', testController.post);

module.exports = router.create();