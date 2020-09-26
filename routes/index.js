var express = require('express');
var router = express.Router();

let controller = require('../controllers/setupController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/setup', controller.setup);


module.exports = router;
