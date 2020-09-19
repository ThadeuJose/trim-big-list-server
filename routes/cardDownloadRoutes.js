let express = require('express');
let router = express.Router();

let controller = require('../controllers/cardDownloadController.js');

router.get('/:set/:number', controller.downloadOne);

module.exports = router;
