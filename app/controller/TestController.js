const TestController = {

  index: (req, res) => {
    
    res.status(200).send({
    	'message': 'Test endpoint'
    });
  }
}

module.exports = TestController;