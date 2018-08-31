const express = require('express');
const expressValidator = require('express-validator');
const router = express.Router();

class Router {
  get(...params) {this.matcher('get', ...params);}
  post(...params) {this.matcher('post', ...params);}
  patch(...params) {this.matcher('patch', ...params);}
  put(...params) {this.matcher('put', ...params);}
  delete(...params) {this.matcher('delete', ...params);}
  use(...params) { router.use(...params) }

  matcher(method, route, action, middlewares = []) {
    let r;
    switch (method) {
    case 'get':
      r = router.get.bind(router);
      break;
    case 'post':
      r = router.post.bind(router);
      break;
    case 'patch':
      r = router.patch.bind(router);
      break;
    case 'put':
      r = router.put.bind(router);
      break;
    case 'delete':
      r = router.delete.bind(router);
      break;
    default:
      r = router.get.bind(router);
      break;
    }

    r(route, middlewares, async (req, res) => {
      try {
        // inject express-validator into req
        expressValidator()(req, {}, () => {});
        const data = await action(req, res);

        return data;
      } catch (err) {

        console.log(err);

        return res.status(err.code).json({
          message: err
        });
      }
    });
  }

  create() {return router;}
}

module.exports = Router;