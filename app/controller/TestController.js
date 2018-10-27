const indicative = require('indicative');

const TestController = {

  index: (req) => {

    return new Promise( (resolve) => {
      resolve({
        message: 'Test success'
      })
    });
  },

  post: (req) => {

    return new Promise( (resolve, reject) => {

      const rules = {
        name: 'required'
      };
  
      indicative.validateAll(req.body, rules)
      .then((data) => {
        resolve({
          code: 200,
          message: req.body
        });
      })
      .catch( (err) => {
        reject({
          code: 422,
          message: err
        })
      });
    });
  }
}

module.exports = TestController;