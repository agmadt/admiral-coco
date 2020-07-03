const indicative = require('indicative');

const TestController = {

  index: async (req, res) => {

    return res.json({
      message: "Test success"
    });
  },

  post: async (req, res) => {

    const rules = {
      name: 'required',
    };

    indicative.validateAll(req.body, rules)
    .then((data) => {
      return res.json(req.body)
    })
    .catch( (err) => {
      return res.status(422).json(err)
    });
  }
}

module.exports = TestController;